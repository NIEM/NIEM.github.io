
An abstract element exists solely to be replaced.  Schemas may define abstract elements and valid substitutions, but only the valid substitutions may appear in an instance.

While it is best to reuse common components as much as possible, there are some things that do not have standard representations.  This is especially true with code sets.  There is no global and authoritative code set for occupation codes, or offense codes, or county codes.  NIEM supports the need to be able to use alternate code sets or representations with abstract elements.

{: .example}
> NIEM defines abstract element `nc:EmployeeOccupationAbstract` and an element that may be substituted in its place, `nc:EmployeeOccupationCode`.  This element has a code set established by the US Department of Labor.  A domain or exchange may reuse the provided concrete element with the code set, or may add a code set of its own as an alternate substitution.
