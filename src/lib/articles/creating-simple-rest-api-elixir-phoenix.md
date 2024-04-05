---
title: 'Creating a Simple REST API Using Elixir and Phoenix'
category: 'swe'
date: 2023-12-30
tags: ['elixir', 'web-development']
description: A step-by-step guide on creating a REST API with Phoenix, covering everything from database setup to endpoint implementation.
---


When I first dove into the [Phoenix](https://www.phoenixframework.org) framework, I felt intimidated. It quickly became clear that I needed to understand a few key concepts before I could build my first app. However, reading through the book [Programming Phoenix LiveView](https://pragprog.com/titles/liveview/programming-phoenix-liveview/) clarified many of the aspects that confused me. The book gave me enough confidence to build a simple REST API that serves quotes from [Stoic](https://en.wikipedia.org/wiki/Stoicism) philosophers, to apply what I learned. 

In this post, I’ll outline the step-by-step process of creating this API using Phoenix. The API provides these endpoints:
- `/api/quotes/` to list all quotes
- `/api/quotes/random` to fetch a random quote

## Getting Started

### What is Phoenix?

Phoenix is a web development framework built using the [Elixir programming language](https://elixir-lang.org). It’s akin to [Ruby on Rails](https://rubyonrails.org) and [Django](https://www.djangoproject.com) in the Elixir ecosystem as it implements the server-side [Model-View-Controller](https://en.wikipedia.org/wiki/Model–view–controller) design pattern. This makes Phoenix suitable for crafting backend APIs, full-stack web apps, and other applications. 

A key advantage of Phoenix is its robust support for [real-time functionalities via websockets](https://hexdocs.pm/phoenix/channels.html), making it ideal for building chat rooms, multiplayer games, and other apps requiring live updates.

### Prerequisites

In this tutorial, I’ll assume the following:
- You are familiar with Elixir syntax. 
- You have installed [Elixir](https://elixir-lang.org/install.html) and [Phoenix (along with PostgreSQL)](https://hexdocs.pm/phoenix/installation.html).


### Kickstarting Your Phoenix Project

Every Phoenix project begins with the command `mix phx.new`. Run the command below in your terminal:

```bash
mix phx.new stoic_quotes
```

This will create a new directory called `stoic_quotes/` with all the necessary files and folders needed to get started.

## Setting Up a Quotes Database

Next, we’ll create a quotes database. This will involve:
1. Setting up and running a migration  for the `quotes` table schema.
2. Implementing validations in the database to prevent duplicate quotes.
3. Writing a script to insert quotes from a JSON file into the database.

### Schema Setup and Migration

First, we’ll create a database table named `quotes` to store quotes. This table will have these fields:
- `quote`: the quote itself
- `author`: author of the quote
- `source`: the literary work (and chapter) containing the quote

Phoenix provides [generators](https://hexdocs.pm/phoenix/Mix.Tasks.Phx.Gen.html#module-crud-related-generators) that we can leverage for this. Here, we’ll use the `phx.gen.context` generator. 

This generator executes three tasks:
1. Creates a schema module, which includes the schema for items in the `quotes` table and a `changeset` function used for validating new entries. 
2. Provides a context module that offers functions for creating, reading, updating, and deleting items in the `quotes` table. 
3. Generates a Migration file, containing instructions for creating the quotes table in our database.

Furthermore, `phx.gen.context` requires at least 3 arguments: the context module name, the singular and plural names of the generated resources, and any attributes to include in the schema, specifying the data type for each attribute.

Run the following command in your terminal to generate the necessary files for the `quotes` table:

```bash
mix phx.gen.context Quotes Quote quotes quote:text author:string source:string
```


### Preventing Duplicate Quotes in the Database
We need to implement a constraint to prevent users from inserting duplicate quotes into the database. For this, we’ll edit both the migration file and the schema module.
 
#### Editing the Migration File
 
Navigate to the `/priv/repo/migrations` directory and find a timestamped file labeled `create_quotes`. 

This file contains instructions on creating the quotes table with the fields we specified earlier. The `timestamps()` macro adds the `inserted_at` and `updated_at` fields, which store  timestamps at which an entry was inserted and updated, respectively. 

Now, edit the migration file to look like this:

```elixir
defmodule StoicQuotes.Repo.Migrations.CreateQuotes do
	use Ecto.Migration

	def change do
		create table(:quotes) do
			add :quote, :text
			add :author, :string
			add :source, :string
			timestamps()
		end
	
		# add this line below to enforce unique quotes
		create unique_index(:quotes, [:quote], name: :index_for_duplicate_quotes) 
	end
end
```

The new line we’ve added to the migration file creates a unique index, ensuring each quote is distinct. 

After making these edits, execute the command `mix ecto.migrate` in the terminal to create the `quotes` table.

#### Update Quotes Table Validations in the Schema Module

The schema module, located in `lib/stoic_quotes/quotes/quote.ex`, defines the schema and includes a [changeset function](https://hexdocs.pm/ecto/Ecto.Changeset.html) used for validating new entries before their insertion into the `quotes` table. 

These changeset functions are used by methods in the generated context module `StoicQuotes.Quotes`, found in `lib/stoic_quotes/quotes.ex`. For example, the context module provides this function for creating quotes:  

```elixir
def create_quote(attrs \\ %{}) do
	%Quote{}
	|> Quote.changeset(attrs)
	|> Repo.insert()
end
```

Here, `create_quote` takes a struct containing the fields of the new quote entry. It applies the `Quote.changeset` to this input before passing it to `Repo.insert()` function. Entries that violate any constraints won’t be inserted. 

By default, the changeset function in the `Quote` schema module checks that the necessary fields-- quote, author, and source-- are provided for each new entry. Let’s add another line to implement the unique constraint:

```elixir
defmodule StoicQuotes.Quotes.Quote do
	use Ecto.Schema
	import Ecto.Changeset

	schema "quotes" do
		field :author, :string
		field :source, :string
		field :quote, :string
		timestamps()
	end

	@doc false
	def changeset(quote, attrs) do
		quote
		|> cast(attrs, [:quote, :author, :source])
		|> validate_required([:quote, :author, :source])
			|> unique_constraint(:quote, name: :index_for_duplicate_quotes) #Add this new line
	end
end
```

The new line we’ve added leverages the index we defined in the migration file to prevent the insertion of duplicate quotes and provides an error message when this occurs.

### Add Data to the Database

Now, let’s add quotes to the database. Create a JSON file named `quotes.json` in the `priv/repo/` directory. We’ll populate the JSON file with 3 quotes to start:

```json
[
	{
		"quote": "Seldom are any found unhappy from not observing what is in the minds of others. But such as observe not well the stirrings of their own souls must of necessity be unhappy.",
		"author": "Marcus Aurelius",
		"source": "Book II, Meditations"
	},
	
	{
		"quote": "Consider whence each thing came, of what it was compounded, into what it will be changed, how it will be with it when changed, and that it will suffer no evil.",
		"author": "Marcus Aurelius",
		"source": "Book XI, Meditations"
	},
	
	{
		"quote": "Accustom yourself as much as possible, when any one takes any action, to consider only: To what end is he working? But begin at home; and examine yourself first of all.",
		"author": "Marcus Aurelius",
		"source": "Book X, Meditations"
	}
]
```

Next, we’ll write a script to insert these quotes into the database. Create a script called `seeds.exs` in `priv/repo/` with the following contents:

```elixir
alias StoicQuotes.Quotes

# Read quotes from the JSON file
quotes_path = "priv/repo/quotes.json"
quotes_path
|> File.read!()
|> Jason.decode!()
|> Enum.each(fn attrs ->
	# Construct a quote struct and attempt to insert it
	quote = %{quote: attrs["quote"], author: attrs["author"], source: attrs["source"]}
	case Quotes.create_quote(quote) do
		{:ok, _quote} -> :ok
		{:error, _changeset} -> :duplicate
	end
end)
```

This script uses the `Quotes` context module to insert each quote into the database. 

Run the following command to execute the script:

```bash
mix run priv/repo/seed.exs
```

To verify the quotes in the database:
1. Execute `iex -S mix` in the terminal to open an Elixir shell.
2. Enter `alias StoicQuotes.Quotes` to alias the `Quotes` module.
3. Run `Quotes.list_quotes()` to list all quotes in the database.

## Building API Endpoints

Now that the database is set up, we need to establish endpoints for our REST API. These include the following:
- `/api/quotes/` to lists all quotes
- `/api/quotes/random` to fetch a random quote

### Define Endpoints

In this project, routes are defined in `lib/stoic_quotes_web/router.ex`. We can implement the REST API routes by adding the following declaration into the body of this file:
 
```elixir
scope "/api", StoicQuotesWeb do
	pipe_through :api
	get "/quotes", QuotesController, :index
	get "/quotes/random", QuotesController, :show
end
```

This snippet sets up the `/api/` routes to use the pipeline defined by `pipe_through :api`. Requests to these routes will be processed by the `:api` pipeline, which is defined in the file as

```elixir
pipeline :api do
	plug :accepts, ["json"]
end
```

Routes using this pipeline will accept JSON requests. 

Furthermore, the defined routes specify that `GET` requests to the `/api/quotes/` and `/api/quotes/random` will be handled by the `:index` and `:show` actions in the `QuotesController` module, respectively. 

In the following section, we’ll learn how to create these controller actions.

### Create Controllers

Phoenix will look for controller definitions in the directory `lib/stoic_quotes_web/controllers/`. Let’s create a file named `quotes_controller.ex`  here to define our API’s behavior:

```elixir
defmodule StoicQuotesWeb.QuotesController do	
	use Phoenix.Controller, formats: [:json]
	alias StoicQuotes.Quotes

	def index(conn, _params) do
		quotes = %{quotes: Quotes.list_quotes()}
		render(conn, :index, quotes)
	end
	
	def show(conn, _params) do
		quote = %{quote: Quotes.get_random_quote!()}
		render(conn, :show, quote)
	end
end
```


The `index` and `show` functions implement the logic for the `:index` and `:show` actions defined in the router, respectively. These require two arguments: the [connection struct](https://hexdocs.pm/plug/Plug.Conn.html) `conn` and a set of parameters `params`, which we won't use (for more info on actions read [here](https://hexdocs.pm/phoenix/controllers.html#actions)).

Outputs of these functions are dictated by the `render/3` function, which [generates the views](https://hexdocs.pm/phoenix/Phoenix.Controller.html#render/3) for these actions. Here, `render` takes a connection struct, an atom corresponding to the view template and data to pass to the template.

In addition, the macro `use Phoenix.Controller, formats: [:json]` specifies that this controller [renders JSON responses](https://hexdocs.pm/phoenix/Phoenix.Controller.html#module-rendering-and-layouts). Phoenix will look for the view templates in the file `quotes_json.ex`, which we’ll define in the next section.

### Make View Templates

In the `lib/stoic_quotes_web/controllers/` directory, let’s create the `quotes_json.ex` file to format data for the API responses:

```elixir
defmodule StoicQuotesWeb.QuotesJSON do
	alias StoicQuotes.Quotes.Quote
	
	def index(%{quotes: quotes}) do
		%{data: for(quote <- quotes, do: data(quote))}
	end
	
	def show(%{quote: quote}) do
		%{data: data(quote)}
	end		
	
	defp data(%Quote{} = datum) do
		%{
			quote: datum.quote,
			author: datum.author,
			source: datum.source
		}
	end
end
```

These functions define the view templates for the `index` and the `show` actions. Both functions return a struct with a `data` field, which Phoenix automatically converts into appropriate JSON response formats. 

## Testing the API

Now, let’s test this API. An easy way to do this is to use the `curl` command, available in terminals, that transfers data from or to a server.

First, run `mix phx.server` to start the server. After that, test the endpoint routes using these commands:
- `curl -i localhost:4000/quotes/`
- `curl -i localhost:4000/quotes/random`

## Conclusion

In this blog post, we covered the necessary steps to build a simple REST API using the Phoenix Framework. First, we set up a database, populated it with quote entries, and implemented the endpoints for our REST API. Finally, we created controllers and corresponding views to generate JSON responses.
