---
  title: Release History
  short: History
  icon: fa-history
  description: A timeline of NIEM releases and significant features.
---

## Release History

<table>
  <tr>
    <th>Release</th>
    <th>Published</th>
    <th>Elements</th>
    <th>Comments</th>
    <th>Major Additions</th>
  </tr>
  <tr>
    <td><a href="https://it.ojp.gov/initiatives/gjxdm/archive">GJXDM 3.0.3</a></td>
    <td>2003</td>
    <td>2,000</td>
    <td>
      <ul>
        <li>Global Justice XML Data Model</li>
        <li>Predecessor of NIEM</li>
        <li>Basic layout:</li>
        <ul>
          <li>One primary namespace (Justice)</li>
          <li>Multiple code namespaces</li>
        </ul>
      </ul>
    </td>
    <td>
      <ul>
        <li>General and justice-specific content</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-1.0">NIEM 1.0</a></td>
    <td>2006</td>
    <td>4,000</td>
    <td>
      <ul>
        <li>Success of GJXDM led to a new multi-domain model</li>
        <li>GJXDM refactored into core content and a Justice domain</li>
        <li>Additional domains added</li>
        <li>Basic layout:</li>
        <ul>
          <li>Two central namespaces (universal core and common core)</li>
          <li>multiple domain namespaces</li>
          <li>multiple code namespaces</li>
        </ul>
        <li>Augmentations implemented via type extension and type substitution</li>
      </ul>
    </td>
    <td>
      <ul>
        <lh>New domains:</lh>
        <li>Emergency Management (em)</li>
        <li>Immigration (im)</li>
        <li>Infrastructure Protection (ip)</li>
        <li>International Trade (it)</li>
        <li>Justice (j)</li>
        <li>Screening (scr)</li>
      </ul>
      <ul>
        <lh>Other:</lh>
        <li>GML external standard</li>
        <li>IC-ISM security markup metadata</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-2.0">NIEM 2.0</a></td>
    <td>2007</td>
    <td>4,000</td>
    <td>
      <ul>
        <li>Concept of namespaces revised to represent governance, not stability or universality</li>
        <li>Consolidated universal core and common core into a single NIEM Core (nc)</li>
        <li>Basic layout:</li>
        <ul>
          <li>a single core namespace (nc)</li>
          <li>multiple domains namespaces</li>
          <li>multiple code namespaces</li>
        </ul>
      </ul>
    </td>
    <td>
      <ul>
        <li>ANSI NIST namespace for Biometrics data</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-2.1">NIEM 2.1</a></td>
    <td>2009</td>
    <td>6,000</td>
    <td>
      <ul>
        <li>NIEM UML profile established</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Chem, Bio, Rad, Nuclear (cbrn)</li>
        <li>Family Services (fs)</li>
        <li>Maritime (m)</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-3.0">NIEM 3.0</a></td>
    <td>2013</td>
    <td>8,000</td>
    <td>
      <ul>
        <li>Revised augmentations to use element substitution</li>
        <li>Updated NIEM UML Profile</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Biometrics (biom) - replaced ANSI NIST namespace</li>
        <li>MilOps (mo) - published as a domain update after 3.0</li>
        <li>Changed Family Services (fs) to Children, Youth, and Family Services (cyfs)</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-3.1">NIEM 3.1</a></td>
    <td>2015</td>
    <td>8,700</td>
    <td>
      <ul>
        <li>Adopted new annual release strategy with a 3-year cycle:</li>
        <ul>
          <li>One major release followed by two minor releases</li>
          <li>Domains can update content yearly in major or minor releases</li>
          <li>Core content and architecture updates every three years with major releases</li>
        </ul>
      </ul>
    </td>
    <td>
      <ul>
        <li>Human Services (hs)</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-3.2">NIEM 3.2</a></td>
    <td>2016</td>
    <td>10,500</td>
    <td>
    </td>
    <td>
      <ul>
        <li>Surface Transportation (st)</li>
        <li>Major addition to Justice (1,000 corrections-related elements)</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.0">NIEM 4.0</a></td>
    <td>2017</td>
    <td>11,000</td>
    <td>
      <ul>
        <li>Represented GENC codes via new Code Lists spec</li>
        <li>See <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-4.0/README.md">release notes</a> for changes</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Agriculture</li>
        <li>Merged CYFS into Human Services</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.1">NIEM 4.1</a></td>
    <td>2018</td>
    <td>11,350</td>
    <td>
      <ul>
        <li>See <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-4.1/README.md">release notes</a> for changes</li>
      </ul>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-4.2">NIEM 4.2</a></td>
    <td>2019</td>
    <td>11,505</td>
    <td>
      <ul>
        <li>See <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-4.2/README.md">release notes</a> for changes</li>
      </ul>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/NIEM/NIEM-Releases/tree/niem-5.0">NIEM 5.0</a></td>
    <td>2020</td>
    <td>12,149</td>
    <td>
      <ul>
        <li>See <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/README.md">release notes</a> for changes</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Controlled Unclassified Information (cui)</li>
        <li>Statistics (stat)</li>
      </ul>
    </td>
  </tr>
</table>
