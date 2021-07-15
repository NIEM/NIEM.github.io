
# PDF build notes

## Status

Basic build runs but needs work:

- Build script doesn't continue after jekyll serve is ready.  Windows issue?
- Need to build the full table of contents and work on page nesting in the PDF sidebar
  - document-level h1 headings need a unique ID
  - tocpage.html needs to be replaced
  - see Prince's [multi-file TOC example](https://www.princexml.com/doc/cookbook/#multifile-table-of-contents)
- All Bootstrap and custom styling seems to be stripped
- Needs to run on localhost for pdf output options but ...
  - PDF links back to the website need the right url
  - Need to hide localhost info for internal PDF links

## Windows fork error message

This code uses a fork() method that is not available on Windows.

Error message:

```sh
#     ...
#     2: from .../jekyll/commands/serve.rb:233:in `start_up_webrick'
#     1: from .../jekyll/commands/serve.rb:301:in `boot_or_detach'
# .../jekyll/commands/serve.rb:301:in `fork': fork() function is unimplemented on this machine (NotImplementedError)
```

Open the file with the error message (`serve.rb`) and replace `Process.fork()` with `Process.spawn()`

**Original:**

```ruby
  pid = Process.fork do
    server.start
  end
```

**Updated:**

```ruby
  pid = Process.spawn(server.start)
```
