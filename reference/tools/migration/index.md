---
  title: Migration Tool
---

The **[Migration Tool]({{ site.data.links.migration }})** enables you to upgrade an XML Schema release subset to a newer version.  This supports the process to update an existing exchange to use a more recent NIEM release.

Migrations may only be made over consecutive releases.  It will be necessary to run multiple migrations to convert to a non-consecutive release.  For example, to migrate a 3.1 release subset to 4.0, two migrations must be made: 3.1 to 3.2, and then 3.2 to 4.0.

{:.features}

- Release subset migrated to a newer version
- Updated wantlist
- Migration report that contains status information and any issues encountered

{:.note}
> The migration tool only migrates release subsets.  Local NIEM schemas must be updated manually.

<!--more-->
