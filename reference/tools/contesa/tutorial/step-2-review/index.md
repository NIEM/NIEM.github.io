---
  title: Review the Conformance Report
  short: Review
  icon: fa-search
---

{{page.description}}

Once content has been uploaded to ConTesA, a conformance report is
produced. It contains the output of how the content performed in
evaluation against the NIEM NDR automated rules.

{:.tip}
> You can download the prepackaged assets for this tutorial by clicking
> [this link](assets/package-assets.zip).

## Case 1: XML Schema with No Errors

------------------------------------

In the first step of this tutorial, we created an XML Schema document
for the *Crash* data model. Let's review the generated report from
ConTesA.

![Image of Crash Model XSD Conformance Report](assets/crash_model_report.png
  "Crash Model XSD Conformance Report")

Notice the report produces a graphic of the proportion of automated
rules passed, failed, and run. It also specifically identifies which
rules were passed and which failed.

## Case 2: XML Schema with Errors

---------------------------------

Let's generate a new conformance report for the *Crash* model where
we've injected some errors:

![Image of Crash Model Bad XSD Conformance Report](assets/crash_model_bad_errors.png
  "Crash Model Bad XSD Conformance Report")

Notice that a list of violated rules and the line number where the error occurs
appear on this page. The rule's message explains the error and thus suggests how to
fix it.

## Case 3: XML Schema Instance

------------------------------

Lastly, we generated an instance of our model. We can review the
conformance of the instance to the NIEM NDR in the same way as
the XML Schema documents.

![Image of Crash Model XML Conformance Report](assets/crash_model_instance_report.png
  "Crash Model XML Conformance Report")
