---
   title: nga_datum
---

**Prefix:** nga

Source: National Geospatial-Intelligence Agency; 
Publication: Temporal Spatial Positioning Information (TSPI) ; 
Version: 2.0; 
Date: 1 Mar 2012;   
http://metadata.ces.mil/dse/ns/GSIP/tspi/2.0.0/tspi-core.xsd

<a href="http://release.niem.gov/niem/codes/nga_datum/4.0/nga_datum.xsd">XML Schema</a>

## Type Index

| Type | Definition | Code Count |
| --- | --- | --- |
| <a href="#directiondatumcodesimpletype">DirectionDatumCodeSimpleType</a> | A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth). | 4 |
| <a href="#verticaldatumcodesimpletype">VerticalDatumCodeSimpleType</a> | A data type for vertical datum codes. | 46 |

## DirectionDatumCodeSimpleType

A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).

| Code | Definition |
| --- | --- |
| geodetic | Referenced to the direction of the geographic North Pole. |
| Magnetic | Referenced to the direction of the magnetic North Pole. |
| militaryGrid | Referenced to the direction of "north" in a military grid established by a suitable map-projection, for example Universal Transverse Mercator (UTM). |
| Relative | Referenced to a direction established by the context of use (for example: the heading of a vessel). |

<a href="#type-index">Back to type index</a>
## VerticalDatumCodeSimpleType

A data type for vertical datum codes.

| Code | Definition |
| --- | --- |
| approxLowestAstronomTide | Approximate Lowest Astronomical Tide: An approximate level, usually within 0.3 metres from that of lowest astronomical tide. |
| approxMeanLowerLowWater | Approximate Mean Lower Low Water: An approximate level, usually within 0.3 metres from that of mean lower low water. |
| approxMeanLowWater | Approximate Mean Low Water: An approximate level, usually within 0.3 metres from that of mean low water. |
| approxMeanLowWaterSprings | Approximate Mean Low Water Springs: An approximate level, usually within 0.3 metres from that of mean low water springs. |
| approxMeanSeaLevel | Approximate Mean Sea Level: An approximate level, usually within 0.3 metres from that of mean sea level. |
| equinoctialSpringLowWater | Equinoctial Spring Low Water: The level of low water springs near the time of an equinox. |
| groundLevel | Ground Level: A continuous surface over dry land and non-tidal waters (for example: lakes). [desc] In the case of non-tidal waters it is necessary to specify hydrologic conditions in order to ensure a precise reference surface specification. Over extensive areas it is often defined by a digital elevation model (for example: a matrix of elevation values or a Triangulated Irregular Network (TIN)). Over tidal waters (for example: oceans) it is usually considered to be extended to cover the remainder of the world based on a Mean Sea Level (MSL) surface. |
| higherHighWater | Higher High Water: The highest of the high waters (or single high water) of any specified tidal day due to the declination A1 effects of the moon and sun. |
| higherHighWaterLargeTide | Higher High Water Large Tide: The average of the highest high waters, one from each of 19 years of observations. |
| highestAstronomicalTide | Highest Astronomical Tide: The highest tidal level, which can be predicted to occur under average meteorological conditions and under any combination of astronomical conditions. |
| highestHighWater | Highest High Water: The highest water level observed at a location. |
| highWater | High Water: The highest level reached at a location by the water surface in one tidal cycle. [desc] When used on inland waters it is generally defined as a level that the daily mean water level exceeds less than 5 percent of the time. |
| highWaterSprings | High Water Springs: An arbitrary level, approximating that of mean high water springs. |
| igld1985 | International Great Lakes Datum 1985: A vertical reference system with its zero based on the mean water level at Rimouski/Pointe-au-Père, Quebec, over the period 1970 to 1988. |
| indianSpringHighWater | Indian Spring High Water: A tidal surface datum approximating the level of the mean of the higher high water at spring tides. [desc] This tidal datum approximates the highest water level observed at a location and is usually above that of the higher high water at spring tides. |
| indianSpringLowWater | Indian Spring Low Water: A tidal surface datum approximating the level of the mean of the lower low water at spring tides. [desc] This tidal datum approximates the lowest water level observed at a location and is usually below that of the lower low water at spring tides. |
| lowerLowWater | Lower Low Water: The lowest of the low waters (or single low water) of any specified tidal day due to the declination A1 effects of the moon and sun. |
| lowerLowWaterLargeTide | Lower Low Water Large Tide: The average of the lowest low waters, one from each of 19 years of observations. |
| lowestAstronomicalTide | Lowest Astronomical Tide: The lowest tide level that can be predicted to occur under average meteorological conditions and under any combination of astronomical conditions. |
| lowestLowWater | Lowest Low Water: An arbitrary level conforming to the lowest tide observed at a location, or somewhat lower. |
| lowestLowWaterSprings | Lowest Low Water Springs: An arbitrary level conforming to the lowest water level observed at a location at spring tides during a period shorter than 19 years. |
| lowWater | Low Water: An approximation of mean low water adopted as the reference level for a limited region, irrespective of better determinations later. [desc] Used mostly in harbour and river engineering. Used in inland waters. It is generally defined as a level which the daily mean water level would fall below less than 5 percent of the time and by no more than 0.2 metres during the navigation season. A single level surface is usually chosen as the low water datum for a whole lake. On a river, low water datum is a sloping surface, which approximates the surface of the river at a low state. |
| lowWaterSprings | Low Water Springs: A level approximating that of mean low water springs. |
| meanHigherHighWater | Mean Higher High Water: The average height of higher high waters at a location over a 19-year period. |
| meanHigherHighWaterSprings | Mean Higher High Water Springs: The average height of higher high water at spring tides at a location. |
| meanHighWater | Mean High Water: The average height of all high waters at a location over a 19-year period. |
| meanHighWaterNeaps | Mean High Water Neaps: The average height of the high waters of the neap tide. |
| meanHighWaterSprings | Mean High Water Springs: The average height of the high waters of spring tides. |
| meanLowerLowWater | Mean Lower Low Water: The average height of the lower low waters at a location over a 19-year period. |
| meanLowerLowWaterSprings | Mean Lower Low Water Springs: The average height of lower low water at spring tides at a location. |
| meanLowWater | Mean Low Water: The average height of all low waters at a location over a 19-year period. |
| meanLowWaterNeaps | Mean Low Water Neaps: The average height of the low waters of the neap tide. |
| meanLowWaterSprings | Mean Low Water Springs: The average height of the low waters of spring tides. |
| meanSeaLevel | Mean Sea Level (MSL): A continuous surface over the oceans (or its hypothetical extension under the land masses) defined by the mean of sea level surfaces approximated and observed over 19 years. |
| meanTideLevel | Mean Tide Level: The arithmetic mean of mean high water and mean low water. |
| meanWaterLevel | Mean Water Level: The average of all hourly water levels over the available period of record. |
| navd88 | North American Vertical Datum (NAVD) 1988: A fixed reference for elevations derived from a general adjustment of the first-order terrestrial levelling nets of the United States, Canada, and Mexico. [desc] In the adjustment, only the height of the primary tidal bench mark, referenced to the International Great Lakes Datum of 1985 local mean sea level height value, at Pointe-au-Pere, Quebec, on the Gulf of St. Lawrence was held fixed, thus providing minimum constraint. |
| neapTide | Neap Tide: A tide of decreased range (or tidal currents of decreased speed) occurring semi-monthly as the result of the moon being in quadrature. [desc] The neap range of the tide is the average range occurring at the time of neap tides and is most conveniently computed from the harmonic constants. It is smaller than the mean range where the type of tide is either semi-diurnal or mixed and is of no practical significance where the type of tide is predominantly diurnal. |
| nearlyHighestHighWater | Nearly Highest High Water: An arbitrary level approximating the highest water level observed at a location, usually equivalent to the high water springs. |
| nearlyLowestLowWater | Nearly Lowest Low Water: A level approximating the lowest water level observed at a location, usually equivalent to Indian spring low water. |
| ngvd29 | National Geodetic Vertical Datum (NGVD) 1929: A fixed reference for elevations derived from a general adjustment in 1929 of the first-order leveling nets of both the United States and Canada. [desc] In the adjustment, mean sea level was held fixed as observed at 21 tide stations in the United States and 5 in Canada. |
| springTide | Spring Tide: A tide of increased range (or tidal water currents of increased speed) occurring semi-monthly as the result of the moon being new or full. [desc] The spring range of tide is the average range occurring at the time of spring tides and is most conveniently computed from the harmonic constants. It is larger than the mean range where the type of tide is either semi-diurnal or mixed, and is of no practical significance where the type of tide is predominantly diurnal. |
| waterLevel | Water Level: A locally observed level of the water surface. [desc] In the case of non-tidal waters (for example: lakes or rivers) it is necessary to specify hydrologic conditions in order to ensure a precise reference surface specification. Over tidal waters (for example: oceans) it is necessary to specify tidal conditions in order to ensure a precise reference surface specification. |
| wgs84Egm08Geoid | WGS 84 EGM08 Geoid: The geopotential surface defined by the World Geodetic System (WGS) 1984 EGM08 Earth Gravity Model that is closely associated with the mean ocean surface. |
| wgs84Egm96Geoid | WGS 84 EGM96 Geoid: The geopotential surface defined by the World Geodetic System (WGS) 1984 EGM96 Earth Gravity Model that is closely associated with the mean ocean surface. |
| wgs84Ellipsoid | WGS 84 Ellipsoid: The oblate ellipsoidal figure of the Earth defined by the World Geodetic System (WGS) 1984. |

<a href="#type-index">Back to type index</a>
