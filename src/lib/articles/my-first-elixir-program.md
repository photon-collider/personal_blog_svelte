---
title: 'Embarking on My Journey to Learn Elixir: Crafting My First Program'
date: 2023-04-18
tags: ['elixir', 'image-processing']
description: Sharing the process of writing my first Elixir program, which focuses on handling image processing tasks.
---


I recently started learning [Elixir](https://elixir-lang.org) to learn backend development and to take on the challenge of learning a new programming language. Elixir's excellent scalability and fault-tolerant capabilities,ideal for handling concurrent tasks like image processing, drew me to learn it. I was also excited that Elixir is a functional programming language. 

The last time I worked with a functional programming language was when, as an undergraduate student at Cornell, I took the [CS 3110](https://cornellcswiki.gitlab.io/classes/CS3110.html) course on functional programming using [OCaml](https://ocaml.org/). During that period, I realized that utilizing concepts such as pattern matching and the pipe operator enhanced the readability of my code. Hence, I was looking forward to revisiting these concepts once more.

In this post, I will share my experience of putting together my first Elixir program. The objective for this program is provide a pipeline for preprocessing photographs I've taken that I share in the photography section of my website.  To provide some context, the photo files in question are 24-megapixel JPEG files that need to be resized to be displayed optimally on the web. I'll also need to create [webp](https://developers.google.com/speed/webp) equivalents as these tend to be more lightweight than their jpeg counterparts.

As I go over my code, I will assume you are a beginner to programming in Elixir but have experience with other programming languages such as JavaScript or Python.

## Setting Up Elixir

You can install the Elixir on macOS by entering `brew install elixir` in the terminal. For instructions on installing Elixir on other platforms you'll have to visit [the official website here](https://elixir-lang.org/install.html#distributions).  

With Elixir installed you should be able to run Elixir's interactive shell in the terminal by running the `iex` command in a terminal environment.

Elixir uses the build tool `mix` to handle tasks such as generating new projects with some boilerplate, apply code formatting, and handle package management for project dependencies.

We'll use mix to create the project by running this command in the terminal

```bash
mix new image_proc
```

This will create a new directory named `image_proc` containing some additional files and folders. These include files and directories such as 
- `/lib` - directory where the elixir code for the project will be stored
- `/test` - directory for storing unit tests that you can run using the testing library [ExUnit](https://hexdocs.pm/ex_unit/ExUnit.html)
- `.formatter.exs` - config file for the formatting tool provided by `mix` which can be invoked by running `mix format`
- `mix.exs` and `mix.lock` - used by `mix` for managing project builds and dependencies

More information regarding these details can be found [here in the official documentation](https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html).

## Project Dependencies

This project requires the [`Image`](https://hexdocs.pm/image/readme.html) library which will be used as a dependency for generating resized images and converting them to other image formats.

Add `{:image, "~> 0.25.1"}` to your list of dependencies in the `mix.exs` file like so:

```elixir
defp deps do
  [
    {:image, "~> 0.25.1"}
  ]
end
```

After that you'll have to run the following command in the terminal to install this dependency:

```shell
mix deps.get
```

## Handling Input and Output Operations for Images

### Loading Images

First, we'll create the first module dedicated to handling input and output operations for image files. Create the file `image_io.ex` inside the `image_proc/lib` directory. 

```elixir
defmodule ImageIO do

end
```

All functions in this module go in the body of the module between the `do` and `end` keywords. The first function to define here will be used to load images from a given file path:

```elixir
def load_image(image_path) do
  image_path
    |> Image.open!()
    |> Image.minimize_metadata!()
end
```

Functions and other clauses are also wrapped using `do` and `end` keywords. This syntax differs from the curly braces used in languages such as JavaScript or the whitespaces used by Python. 

As I've alluded to before, I've missed having access to the piping operator, given as `|>` in Elixir, in other imperative languages that I use regularly, such as Python. Piping makes it easier to compose computations without needing to create additional variables. Doing the equivalent in a language like Python would look something like

```python 
def load_image(image_path):
  image = Image.open(image_path)
  image = Image.minimize_metadata(image)
  return image
```

While this isn't too bad to read. When defining more complex functions this type of syntax can get a bit hairy. I also find it easier to read the Elixir equivalent better.

### Function Naming Conventions, Pattern Matching, and no `return`  Keyword

One thing I've found interesting about Elixir is its conventions for naming functions. In the `load_image` definition I've used the `open!` and `minimize_metadata!` functions from the `image` library. These functions load the image from the provided file path and remove unneeded metadata from the image's EXIF data, respectively. In the event that an error occurs when performing these operations, an exception is raised that can be handled using the `try`, `catch`, and `rescue`  operators. These work similarly to their equivelants in other languages such as Python's `try` and `except` operators. 

The alternative is to use the `open` and `minimize_metadata` functions (named without an exclamation point). These functions will return a tuple regardless of whether they encounter and error or not. For instance, the `open` function will return the tuple `{:ok, image}` if no error occurs or  the tuple `{:error, message}` when one does occur. This provides an opportunity to pattern match on the outputs for error handling. 

It's important to point out that the outputs `:ok` and `:error`, defined using a semicolon at the start of their definition, are known as [atoms](https://hexdocs.pm/elixir/1.12/Atom.html). These are one of the primitive types supported by Elixir. They are distinct because they are constants whose value is the same as their name. They are very useful for implementing pattern matching structures in Elixir.

With pattern matching we could handle errors by using a `case` operator as shown below:

```elixir
case Image.open(image)
	{:ok, image} ->
		# DO something with loaded image here
	{:error, message} ->
		# DO something here with error and the provided message
end
```

The main reason to avoid doing this would be that it prevents us from using the piping operator to make code concise. You would also have to write a similar block of code to handle errors  coming from `Image.minimize_metadata`.  

Another thing to notice here is that Elixir doesn't have a `return` keyword to break out of functions. Instead, the value of the last evaluated expression is provided as the return value for functions. 

### Retrieving Image File Paths

Now that we have some code written to load images we need to figure out how to retrieve the file paths to images. Elixir's standard library includes several packages including `String`, `Enum`, `Path` that we can use for this purpose. These modules contain functions for handling strings, enumerated variables such as lists and maps, and file paths, respectively. 

One convenient thing about `iex` is that you can use it to check the functions contained in any of these modules and access documentation pertaining to their use. For instance, you can open `iex` and run 

``` elixir
iex> h File
```
to see the functions in the `File` module which contains operations for dealing with files. If you wanted to see what `File.ls` does, you would just have to run `h File.ls` to get a summary of what it does and an example usecase. 

We'll define the function `get_image_paths` in the `Image_IO` module:

```elixir
def get_image_paths(path_input_image_folder) do
  path_input_image_folder
    |> File.ls!()
    |> Enum.filter(&is_image?/1)
    |> Enum.map(fn file ->
      Path.join(path_input_image_folder, file)
    end)
end
```

First, it uses `File.ls!` to list all files in the provided directory path. Next, the `Enum.filter/2`  function takes two arguments: a list of items and a function. The provided function is executed on each item in the list and should return either a truthy or a falsy boolean value. If a truthy value is returned, the item is kept in the list. If a falsy value is returned, the item is removed from the list.

The paths returned by `File.ls!` aren't absolute paths. Hence, this function uses the `Enum.map`
function, which takes an anonymous function that uses the `Path.join` function to join the paths for path of the directory given by `path_input_image_folder` in front of the the names of each the individual image files.

Next, we need to define the `&is_image?/1` function. 

Before we get to that you may wonder what the ampersand  and the `/1` label means. In Elixir, the `/1` refers to the function's arity which otherwise represents the number of arguments the function accepts. The ampersand symbol `&` in `&is_image` represents the [capture operator](https://hexdocs.pm/elixir/1.12/Function.html#module-the-capture-operator) in Elixir. Here, it passes a function into the second argument of `Enum.filter/2`. As an alternative you could also insert the `is_image?` function by wrapping it using the `fn param ->` and `end`  syntax like so:  

```elixir
  path_input_image_folder
    |> File.ls!()
    |> Enum.filter(fn path_image -> is_image?(path_image) end)
    |> Enum.map(fn file ->
      Path.join(path_input_image_folder, file)
    end)
```

The easiest way to check whether a given file is an image is to check it's file extension to see if it corresponds to an image file format. This is precisely what the `is_image?` function defined below does:

``` elixir
@image_filetypes [".jpg", ".jpeg"]

def is_image?(filename) do
  file_extension = filename
    |> Path.extname()
    |> String.downcase()
    Enum.member?(@image_filetypes, file_extension)
end
```

This function checks whether a file is an image using the  `@image_filetypes`  [module atribute](https://elixir-lang.org/getting-started/module-attributes.html). This module attribute holds a list of image file formats, specifically `.jpg` and `.jpeg`, which helps identify whether a given file is an image that needs processing. Module attributes are limited to the scope within the module they are defined in, allowing us to use `@image_filetypes` in any of the functions defined in the `ImageIO` module. Using module attributes prevents us from having to hardcode parameters in all places that they will be used. 

Finally, we'll define a function for generating the file name of the saved image, which takes three arguments including the image name, the image's filetype and a prefix for the image's name:

```elixir
def get_output_filename(imagename, image_filetype, imagename_prefix) do
  case imagename_prefix do
    nil -> "#{imagename}.#{image_filetype}"
    _ -> "#{imagename_prefix}__#{imagename}.#{image_filetype}"
  end
end
```

This function pattern matches on the variable `imagename_prefix` to determine its return value. When no value is provided for this argument, the first case handles such instances by generating a string using the string interpolation syntax given by `#{}` to insert the values of the variables `imagename` and `image_filetype` into the returned formatted string. In the catch all case given by `_ ->` the generated string incorporates all three input arguments.


## Generating Resized Images

The next step will focus on implementing functions for processing loaded images. Create a new file called `image_proc.ex` inside `image_proc/lib` directory. This module, called `ImageProc`, will contain the image processing functions. 

This file should start off with this code

```elixir
defmodule ImageProc do

end
```

Like before, any function definitions will go in the space between the `do` and `end` keywords.

### Main Loop for Iterating Over Image Files and Desired Output File

First, we need to define a function that takes a path to an input folder that contains images and another path to a directory where the resized images will be saved. If the output directory doesn't already exist, it will be generated. Moreover, the function should iterate over the image paths and the output image filetypes to be generated. Thie `process_images` functions defined below achieves this:

```elixir
@imagename_prefix = ""

def process_images(path_input_folder, path_output_folder) do
  lst_paths_image = ImageIO.get_image_paths(path_input_folder)
  output_image_filetypes = ["jpeg", "webp"]

  if not File.exists?(path_output_folder) do
    File.mkdir(path_output_folder)
  end

  for path_image <- lst_paths_image, image_filetype <- output_image_filetypes do
    imagename = get_imagename(path_image)

    ImageIO.load_image(path_image)
    |> generate_resized_images(
        image_filetype, 
        imagename, 
        path_output_folder,
        @imagename_prefix
    )
  end
end
```

I appreciate the for-loop syntax in Elixir because it's very easy to specify the conditions for a nested for-loop that loops over both the list of image paths and the list of output image filetypes, all in just one line code! In this loop the function `get_imagename`  gets the name of the image file, stripping away its absolute path information and the image filetype extension, removes any whitespace, and lowercases each of the characters:

```elixir
def get_imagename(path_image) do
  path_image
  |> Path.rootname()
  |> Path.basename()
  |> String.replace(" ", "")
  |> String.downcase() 
end
```


### Generating Resized Images Step-by-Step

Next, once the image has been loaded the `generate_resized_images` function is invoked:

```elixir
def generate_resized_images(
    image,
    image_filetype,
    imagename,
    output_folder_path,
    imagename_prefix \\ nil
  ) do

  save_folder_path = Path.join(output_folder_path, imagename)
  
  if not File.exists?(save_folder_path) do
    File.mkdir(save_folder_path)
  end

  image_aspect = image |> Image.aspect()
  
  long_edge_final_map = get_resized_long_edge_map(image_aspect)
  image_long_edge_len = get_long_edge_len(image, image_aspect)

  for {sizename, long_edge_final} <- long_edge_final_map do
  
    scale_factor = long_edge_final / image_long_edge_len 
    {:ok, resized_image} = image |> Image.resize(scale_factor)
  
    resized_imagename = "#{imagename}-#{sizename}"
  
    resized_image
    |> ImageIO.save_image(
	    resized_imagename, 
	    save_folder_path, 
	    image_filetype, 
	    imagename_prefix
    )
    
    IO.puts("Writing image #{resized_imagename}.#{image_filetype} to #{save_folder_path}")
  end

end
```

There's quite a bit to unpack here. But these are the key steps:

1. If one doesn't already exist, generate an appropriate folder path where the resized images will be saved
2. Determine the aspect ratio of the image. Use this to select a map of key-value pairs where they keys correspond to sizes `sm`, `md`, `lg` and the values correspond to the length of the image's long edge in pixels for each size once the image has been resized
3. For each of the sizes in the map, calculate a scale factor needed to resize the image to the desired size.
4. Save the image to the output directory

 In step 2, the function `Image.aspect` is used. It returns one of the following atoms depending on the input image's aspect ratio:

- `:landscape` for images with a landscape aspect ratio
- `:portrait` for images with a portrait aspect ratio
- `:square` for images with a square aspect ratio

The aspect ratio is first used in the function `get_resized_long_edge_map` to select the appropriate map depending on whether or not the image has a square aspect ratio:

```elixir
def get_resized_long_edge_map(image_aspect) do
  case image_aspect do
    :square -> @resized_long_edge_map_square
    _ -> @resized_long_edge_map
  end
end
```

If the image has a square aspect ratio, the `@resized_long_edge_map_square` mapping is used, otherwise the `@resized_long_edge_map` is used.

In addition, these are the definitions of the two maps used by this function:

```elixir
@resized_long_edge_map_square %{"sm" => 334, "md" => 668, "lg" => 1334}
@resized_long_edge_map %{"sm" => 500, "md" => 1000, "lg" => 2000}
```

For a square aspect ratio image, the script generates small, medium, and large size images with dimensions of 334x334 , 668x668, and 1334x1334, respectively. Similarly, portrait or landscape images are resized such that their long edges are 500, 1000, and 2000 pixels long for the small, medium, and large sizes, respectively.

The only remaining helper function to define is `get_long_edge_len`. This function returns the appropriate length corresponding to the image's long edge, depending on its aspect ratio:

```elixir
def get_long_edge_len(image, image_aspect) do
  case image_aspect do
    :portrait -> image |> Image.height()
    _ -> image |> Image.width() 
  end
end
```

This is all that is needed for this script!


## Running the Script

Enter the interactive shell by running `iex -S mix` in terminal. 

```elixir
ImageProc.process_images(<path-to-input-image-directory>, <path-to-output-image-directory>)
```



### Conclusion

In this blog post, we've explored how to create a simple Elixir script for resizing images using the `Image` library. We've covered the basics of image I/O, file manipulation, and aspect ratio-based resizing to generate different sizes of images. This script can be easily adapted and expanded upon to meet your specific needs for image processing tasks.

To recap, we've learned how to:

1.  Load and save images using the `Image` library
2.  Retrieve image file paths and filter them based on their file extensions
3.  Generate resized images based on aspect ratios and predefined dimensions
4.  Save the resized images to an output folder with an appropriate naming convention

With these skills in hand, you're well-equipped to tackle more complex image manipulation tasks in Elixir. Whether you're working on a website, a photo management tool, or a content delivery system, this script may serve as a helpful starting point. 


## Next Steps

The image processing pipeline described above generates resized images and stores them locally on your computer. But what if you wanted to directly upload them to a cloud service like Amazon S3? 

To acheive this, we need to incorporate functionality that uses an S3 client to upload the resized images to a storage bucket. In the long run, it would be beneficial to develop a user-friendly frontend, enabling users to drag and drop images for resizing, upload them to an S3 bucket, and manage S3 bucket contents. Our ultimate goal is to construct this interface using the [Phoenix](https://www.phoenixframework.org/) framework. By implementing these improvements, we can optimize our image processing workflow, making it more efficient and user-friendly.