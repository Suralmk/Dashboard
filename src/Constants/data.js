const data = [
  {
    end_year: 2015,
    intensity: 6,
    sector: 'Energy',
    topic: 'gas',
    insight: 'Annual Energy Outlook',
    url: 'http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf',
    region: 'Northern America',
    start_year: 2005,
    impact: '',
    added: 'January, 20 2017 03:51:25',
    published: 'January, 09 2017 00:00:00',
    country: 'United States of America',
    relevance: 2,
    pestle: 'Industries',
    source: 'EIA',
    title:
      'U.S. natural gas consumption is expected to increase during much of the projection period.',
    likelihood: 3
  },
  {
    end_year: 2023,
    intensity: 6,
    sector: 'Energy',
    topic: 'oil',
    insight: 'Annual Energy Outlook',
    url: 'http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf',
    region: 'Northern America',
    start_year: 2012,
    impact: '',
    added: 'January, 20 2017 03:51:24',
    published: 'January, 09 2017 00:00:00',
    country: 'United States of America',
    relevance: 2,
    pestle: 'Industries',
    source: 'EIA',
    title:
      'Reference case U.S. crude oil production is projected to recover from recent declines.',
    likelihood: 3
  },
  {
    end_year: 2018,
    intensity: 6,
    sector: 'Energy',
    topic: 'consumption',
    insight: 'Annual Energy Outlook',
    url: 'http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf',
    region: 'Northern America',
    start_year: 2012,
    impact: '',
    added: 'January, 20 2017 03:51:23',
    published: 'January, 09 2017 00:00:00',
    country: 'United States of America',
    relevance: 2,
    pestle: 'Industries',
    source: 'EIA',
    title:
      'U.S. petroleum consumption is projected to remain below the 2005 level.',
    likelihood: 3
  },
  {
    end_year: 2019,
    intensity: 6,
    sector: 'Environment',
    topic: 'oil',
    insight:
      'WRI Partnership Aims to Foster Supply Chain Transparency, Zero-Deforestation Strategies',
    url: 'http://www.sustainablebrands.com/news_and_views/supply_chain/sustainable_brands/wri_partnership_aims_foster_supply_chain_transparency',
    region: 'Central America',
    start_year: 2009,
    impact: '',
    added: 'January, 20 2017 03:26:40',
    published: 'January, 18 2017 00:00:00',
    country: 'Mexico',
    relevance: 3,
    pestle: 'Environmental',
    source: 'sustainablebrands.com',
    title:
      'Mars, Unilever, Cargill and Mondelēz are already using GFW Commodities to assess deforestation risks in their palm oil, soy and cocoa supply chains across a collective area of land the size of Mexico.',
    likelihood: 2
  },
  {
    end_year: 2015,
    intensity: 6,
    sector: '',
    topic: 'market',
    insight: 'N-Hexane Market Hit at a CAGR of 5% by 2024 - PMR Report',
    url: 'http://www.sbwire.com/press-releases/n-hexane-market-hit-at-a-cagr-of-5-by-2024-pmr-report-761520.htm',
    region: 'World',
    start_year: 2010,
    impact: '',
    added: 'January, 19 2017 00:55:54',
    published: 'January, 18 2017 00:00:00',
    country: '',
    relevance: 2,
    pestle: 'Economic',
    source: 'SBWire',
    title:
      'Polymerization will remain top 3 end-users in global n-Hexane Market.',
    likelihood: 3
  },
  {
    end_year: 2020,
    intensity: 6,
    sector: 'Energy',
    topic: 'oil',
    insight: 'N-Hexane Market Hit at a CAGR of 5% by 2024 - PMR Report',
    url: 'http://www.sbwire.com/press-releases/n-hexane-market-hit-at-a-cagr-of-5-by-2024-pmr-report-761520.htm',
    region: 'World',
    start_year: '',
    impact: '',
    added: 'January, 19 2017 00:55:52',
    published: 'January, 18 2017 00:00:00',
    country: '',
    relevance: 2,
    pestle: 'Economic',
    source: 'SBWire',
    title:
      'High demand for n-Hexane in oil extraction owing to its effectiveness and high yield is expected to propel the global n-Hexane Market.',
    likelihood: 3
  },
  {
    end_year: 2027,
    intensity: 60,
    sector: 'Government',
    topic: 'market',
    insight:
      'E-Boats, Anyone? Electric Boat Market To Reach $20 Billion By 2027, According To New Study',
    url: 'https://cleantechnica.com/2017/01/12/e-boats-anyone-electric-boat-market-reach-20b-2027-according-new-study/',
    region: '',
    start_year: '',
    impact: 3,
    added: 'January, 18 2017 02:23:13',
    published: 'January, 13 2017 00:00:00',
    country: '',
    relevance: 5,
    pestle: 'Political',
    source: 'CleanTechnica',
    title:
      'The market for non-military electric watercraft and marine motors will balloon to over $20 billion worldwide by 2027.',
    likelihood: 4
  },
  {
    end_year: 2018,
    intensity: 16,
    sector: 'Energy',
    topic: 'oil',
    insight: 'Oil prices will be much more volatile in 2017',
    url: 'http://www.news.tracanada.ca/2017/01/16/oil-prices-will-be-much-more-volatile-in-2017/',
    region: 'World',
    start_year: 2017,
    impact: '',
    added: 'January, 17 2017 04:19:59',
    published: 'January, 16 2017 00:00:00',
    country: '',
    relevance: 4,
    pestle: 'Economic',
    source: 'TRAC News',
    title:
      'Global oil prices will witness much more volatility in 2017 even though markets may rebalance in the first half of the year if output cuts pledged by producers are implemented.',
    likelihood: 4
  },
  {
    end_year: 2018,
    intensity: 16,
    sector: '',
    topic: 'gdp',
    insight:
      "IMF affirms Nigeria's recovery from recession, with 0.8% growth forecast",
    url: 'http://www.vanguardngr.com/2017/01/imf-affirms-nigerias-recovery-recession-0-8-growth-forecast/',
    region: 'Western Africa',
    start_year: 2017,
    impact: '',
    added: 'January, 17 2017 03:25:45',
    published: 'January, 16 2017 00:00:00',
    country: 'Nigeria',
    relevance: 4,
    pestle: 'Economic',
    source: 'Vanguard News',
    title:
      'Nigeria Gross Domestic Product will grow by 0.8 percent in 2017 and 2.3 percent in 2018.',
    likelihood: 4
  },
  {
    end_year: '',
    intensity: 6,
    sector: 'Aerospace & defence',
    topic: 'war',
    insight: 'Lebanon: No Land for Beginning Politicians',
    url: 'https://www.avimelamed.com/2017/01/07/lebanon-no-land-for-beginning-politicians/',
    region: 'Western Asia',
    start_year: '',
    impact: '',
    added: 'January, 17 2017 03:18:22',
    published: 'January, 07 2017 00:00:00',
    country: 'Lebanon',
    relevance: 2,
    pestle: 'Political',
    source: 'Avi Melamed',
    title:
      'A war in Lebanon will increase the already heavy economic burden Saudi Arabia is carrying.',
    likelihood: 3
  },
  {
    end_year: '',
    intensity: 4,
    sector: 'Manufacturing',
    topic: 'production',
    insight: 'The Slow Road Back: Oil & Gas Industry Outlook for 2017',
    url: 'http://deloitte.wsj.com/riskandcompliance/2017/01/10/the-slow-road-back-oil-gas-industry-outlook-for-2017/',
    region: 'Northern America',
    start_year: '',
    impact: '',
    added: 'January, 17 2017 02:21:11',
    published: '',
    country: 'United States of America',
    relevance: 2,
    pestle: 'Industries',
    source: 'WSJ',
    title:
      'U.S. production could begin to ramp back up following the rig count upturn.',
    likelihood: 2
  },
  {
    end_year: '',
    intensity: 6,
    sector: 'Retail',
    topic: 'export',
    insight: 'The Slow Road Back: Oil & Gas Industry Outlook for 2017',
    url: 'http://deloitte.wsj.com/riskandcompliance/2017/01/10/the-slow-road-back-oil-gas-industry-outlook-for-2017/',
    region: 'Northern America',
    start_year: '',
    impact: '',
    added: 'January, 17 2017 02:21:10',
    published: '',
    country: 'United States of America',
    relevance: 2,
    pestle: 'Economic',
    source: 'WSJ',
    title:
      'More U.S. LNG (liquified natural gas) export capacity is expected to hit the market.',
    likelihood: 3
  },
  {
    end_year: '',
    intensity: 12,
    sector: 'Energy',
    topic: 'oil',
    insight: 'OPEC sees market stability in 2017, Venezuela aims for $70 price',
    url: 'http://www.reuters.com/article/us-venezuela-opec-idUSKBN1502JJ',
    region: 'Eastern Europe',
    start_year: '',
    impact: '',
    added: 'January, 17 2017 01:17:33',
    published: 'January, 17 2017 00:00:00',
    country: 'Russia',
    relevance: 3,
    pestle: 'Industries',
    source: 'Reuters',
    title:
      'OPEC, Russia and other non-members of the producer group will curtail oil output by nearly 1.8 million bpd.',
    likelihood: 4
  },
  {
    end_year: '2016',
    intensity: 16,
    sector: 'Energy',
    topic: 'oil',
    insight:
      "Cargill's quest for fish food grows, enriching canola in Montana and growing protein in tank",
    url: 'http://www.startribune.com/cargill-s-quest-for-fish-food-grows-enriching-canola-in-montana-and-growing-protein-in-tank/410681245/',
    region: 'World',
    start_year: 2019,
    impact: '',
    added: 'January, 17 2017 00:55:16',
    published: 'January, 14 2017 00:00:00',
    country: 'Germany',
    relevance: 4,
    pestle: 'Economic',
    source: 'Star Tribune',
    title:
      "Industry demand for fish oil will bypass the world's fish oil supply in 2019.",
    likelihood: 4
  }
]

const data2 = [
  {
    id: 1,
    end_year: 2015,
    title: "Ibypass the world's fish oil supply in 2019.",
    intensity: 10,
    topic: 'Food',
    region: 'Europe',
    start_year: 2020
  },
  {
    id: 2,
    end_year: 2010,
    title:
      "Industry demand for fish oil will bypass the world's fish oil supply in 2019.",
    intensity: 12,
    topic: 'oil',
    region: 'Eastern Europe',
    start_year: 2018
  },
  {
    id: 3,
    end_year: 2019,
    title: "Indust bypass the world's fish oil supply in 2019.",
    intensity: 7,
    topic: 'oil',
    region: 'Eastern Europe',
    start_year: 1900
  },
  {
    id: 3,
    end_year: 2019,
    title: "Indust bypass the world's fish oil supply in 2019.",
    intensity: 7,
    topic: 'oil',
    region: 'Eastern Europe',
    start_year: 1900
  },
  {
    id: 3,
    end_year: 2019,
    title: "Indust bypass the world's fish oil supply in 2019.",
    intensity: 7,
    topic: 'oil',
    region: 'Eastern Europe',
    start_year: 1900
  },
  {
    id: 3,
    end_year: 2019,
    title: "Indust bypass the world's fish oil supply in 2019.",
    intensity: 7,
    topic: 'oil',
    region: 'Eastern Europe',
    start_year: 1900
  },
  {
    id: 3,
    end_year: 2019,
    title: "Indust bypass the world's fish oil supply in 2019.",
    intensity: 7,
    topic: 'oil',
    region: 'Eastern Europe',
    start_year: 1900
  },
  {
    id: 3,
    end_year: 2019,
    title: "Indust bypass the world's fish oil supply in 2019.",
    intensity: 7,
    topic: 'oil',
    region: 'Eastern Europe',
    start_year: 1900
  },
  {
    id: 3,
    end_year: 2019,
    title: "Indust bypass the world's fish oil supply in 2019.",
    intensity: 7,
    topic: 'oil',
    region: 'Eastern Europe',
    start_year: 1900
  }
]

const mapdata = [
  {
    id: 'AFG',
    value: 492753
  },
  {
    id: 'AGO',
    value: 339146
  },
  {
    id: 'ALB',
    value: 56614
  },
  {
    id: 'ARE',
    value: 195178
  },
  {
    id: 'ARG',
    value: 376580
  },
  {
    id: 'ARM',
    value: 814075
  },
  {
    id: 'ATA',
    value: 392825
  },
  {
    id: 'ATF',
    value: 549814
  },
  {
    id: 'AUT',
    value: 910313
  },
  {
    id: 'AZE',
    value: 865194
  },
  {
    id: 'BDI',
    value: 741318
  },
  {
    id: 'BEL',
    value: 340351
  },
  {
    id: 'BEN',
    value: 655189
  },
  {
    id: 'BFA',
    value: 964642
  },
  {
    id: 'BGD',
    value: 43338
  },
  {
    id: 'BGR',
    value: 236377
  },
  {
    id: 'BHS',
    value: 457612
  },
  {
    id: 'BIH',
    value: 92286
  },
  {
    id: 'BLR',
    value: 22224
  },
  {
    id: 'BLZ',
    value: 779949
  },
  {
    id: 'BOL',
    value: 65822
  },
  {
    id: 'BRN',
    value: 422861
  },
  {
    id: 'BTN',
    value: 473855
  },
  {
    id: 'BWA',
    value: 702875
  },
  {
    id: 'CAF',
    value: 836702
  },
  {
    id: 'CAN',
    value: 817039
  },
  {
    id: 'CHE',
    value: 381749
  },
  {
    id: 'CHL',
    value: 721646
  },
  {
    id: 'CHN',
    value: 975706
  },
  {
    id: 'CIV',
    value: 315363
  },
  {
    id: 'CMR',
    value: 657617
  },
  {
    id: 'COG',
    value: 527730
  },
  {
    id: 'COL',
    value: 604447
  },
  {
    id: 'CRI',
    value: 634330
  },
  {
    id: 'CUB',
    value: 101557
  },
  {
    id: '-99',
    value: 860443
  },
  {
    id: 'CYP',
    value: 689318
  },
  {
    id: 'CZE',
    value: 726462
  },
  {
    id: 'DEU',
    value: 211213
  },
  {
    id: 'DJI',
    value: 368078
  },
  {
    id: 'DNK',
    value: 467696
  },
  {
    id: 'DOM',
    value: 594680
  },
  {
    id: 'DZA',
    value: 535057
  },
  {
    id: 'ECU',
    value: 254771
  },
  {
    id: 'EGY',
    value: 423242
  },
  {
    id: 'ERI',
    value: 117155
  },
  {
    id: 'ESP',
    value: 731389
  },
  {
    id: 'EST',
    value: 389605
  },
  {
    id: 'ETH',
    value: 356323
  },
  {
    id: 'FIN',
    value: 344236
  },
  {
    id: 'FJI',
    value: 910098
  },
  {
    id: 'FLK',
    value: 287722
  },
  {
    id: 'FRA',
    value: 500159
  },
  {
    id: 'GAB',
    value: 71328
  },
  {
    id: 'GBR',
    value: 877103
  },
  {
    id: 'GEO',
    value: 655529
  },
  {
    id: 'GHA',
    value: 721498
  },
  {
    id: 'GIN',
    value: 226325
  },
  {
    id: 'GMB',
    value: 375656
  },
  {
    id: 'GNB',
    value: 2908
  },
  {
    id: 'GNQ',
    value: 998969
  },
  {
    id: 'GRC',
    value: 422301
  },
  {
    id: 'GTM',
    value: 480585
  },
  {
    id: 'GUY',
    value: 409752
  },
  {
    id: 'HND',
    value: 144104
  },
  {
    id: 'HRV',
    value: 583174
  },
  {
    id: 'HTI',
    value: 879875
  },
  {
    id: 'HUN',
    value: 806208
  },
  {
    id: 'IDN',
    value: 596064
  },
  {
    id: 'IND',
    value: 449424
  },
  {
    id: 'IRL',
    value: 874492
  },
  {
    id: 'IRN',
    value: 958432
  },
  {
    id: 'IRQ',
    value: 832210
  },
  {
    id: 'ISL',
    value: 321496
  },
  {
    id: 'ISR',
    value: 844148
  },
  {
    id: 'ITA',
    value: 365110
  },
  {
    id: 'JAM',
    value: 714027
  },
  {
    id: 'JOR',
    value: 898151
  },
  {
    id: 'JPN',
    value: 523474
  },
  {
    id: 'KAZ',
    value: 234968
  },
  {
    id: 'KEN',
    value: 202256
  },
  {
    id: 'KGZ',
    value: 615791
  },
  {
    id: 'KHM',
    value: 927275
  },
  {
    id: 'OSA',
    value: 174672
  },
  {
    id: 'KWT',
    value: 635139
  },
  {
    id: 'LAO',
    value: 265598
  },
  {
    id: 'LBN',
    value: 864628
  },
  {
    id: 'LBR',
    value: 132807
  },
  {
    id: 'LBY',
    value: 946291
  },
  {
    id: 'LKA',
    value: 679263
  },
  {
    id: 'LSO',
    value: 751082
  },
  {
    id: 'LTU',
    value: 879035
  },
  {
    id: 'LUX',
    value: 693473
  },
  {
    id: 'LVA',
    value: 486484
  },
  {
    id: 'MAR',
    value: 959719
  },
  {
    id: 'MDA',
    value: 881061
  },
  {
    id: 'MDG',
    value: 255534
  },
  {
    id: 'MEX',
    value: 76985
  },
  {
    id: 'MKD',
    value: 744129
  },
  {
    id: 'MLI',
    value: 277903
  },
  {
    id: 'MMR',
    value: 280241
  },
  {
    id: 'MNE',
    value: 687577
  },
  {
    id: 'MNG',
    value: 425630
  },
  {
    id: 'MOZ',
    value: 218403
  },
  {
    id: 'MRT',
    value: 937548
  },
  {
    id: 'MWI',
    value: 481833
  },
  {
    id: 'MYS',
    value: 629564
  },
  {
    id: 'NAM',
    value: 523849
  },
  {
    id: 'NCL',
    value: 164959
  },
  {
    id: 'NER',
    value: 984620
  },
  {
    id: 'NGA',
    value: 485643
  },
  {
    id: 'NIC',
    value: 231195
  },
  {
    id: 'NLD',
    value: 326221
  },
  {
    id: 'NOR',
    value: 712725
  },
  {
    id: 'NPL',
    value: 556911
  },
  {
    id: 'NZL',
    value: 379041
  },
  {
    id: 'OMN',
    value: 537619
  },
  {
    id: 'PAK',
    value: 245282
  },
  {
    id: 'PAN',
    value: 452537
  },
  {
    id: 'PER',
    value: 516924
  },
  {
    id: 'PHL',
    value: 216539
  },
  {
    id: 'PNG',
    value: 447896
  },
  {
    id: 'POL',
    value: 821688
  },
  {
    id: 'PRI',
    value: 409875
  },
  {
    id: 'PRT',
    value: 330274
  },
  {
    id: 'PRY',
    value: 157400
  },
  {
    id: 'QAT',
    value: 644684
  },
  {
    id: 'ROU',
    value: 785179
  },
  {
    id: 'RUS',
    value: 342256
  },
  {
    id: 'RWA',
    value: 82717
  },
  {
    id: 'ESH',
    value: 795828
  },
  {
    id: 'SAU',
    value: 449471
  },
  {
    id: 'SDN',
    value: 35270
  },
  {
    id: 'SDS',
    value: 409735
  },
  {
    id: 'SEN',
    value: 810828
  },
  {
    id: 'SLB',
    value: 257972
  },
  {
    id: 'SLE',
    value: 152396
  },
  {
    id: 'SLV',
    value: 969977
  },
  {
    id: 'ABV',
    value: 59546
  },
  {
    id: 'SOM',
    value: 67203
  },
  {
    id: 'SRB',
    value: 283826
  },
  {
    id: 'SUR',
    value: 41649
  },
  {
    id: 'SVK',
    value: 285111
  },
  {
    id: 'SVN',
    value: 708060
  },
  {
    id: 'SWZ',
    value: 790834
  },
  {
    id: 'SYR',
    value: 111701
  },
  {
    id: 'TCD',
    value: 684544
  },
  {
    id: 'TGO',
    value: 720804
  },
  {
    id: 'THA',
    value: 201267
  },
  {
    id: 'TJK',
    value: 571086
  },
  {
    id: 'TKM',
    value: 125757
  },
  {
    id: 'TLS',
    value: 464491
  },
  {
    id: 'TTO',
    value: 942637
  },
  {
    id: 'TUN',
    value: 316017
  },
  {
    id: 'TUR',
    value: 533188
  },
  {
    id: 'TWN',
    value: 225935
  },
  {
    id: 'TZA',
    value: 41447
  },
  {
    id: 'UGA',
    value: 479709
  },
  {
    id: 'UKR',
    value: 563671
  },
  {
    id: 'URY',
    value: 909941
  },
  {
    id: 'USA',
    value: 336634
  },
  {
    id: 'UZB',
    value: 151906
  },
  {
    id: 'VEN',
    value: 643137
  },
  {
    id: 'VNM',
    value: 767182
  },
  {
    id: 'VUT',
    value: 701952
  },
  {
    id: 'PSE',
    value: 22260
  },
  {
    id: 'YEM',
    value: 152319
  },
  {
    id: 'ZAF',
    value: 664478
  },
  {
    id: 'ZMB',
    value: 181239
  },
  {
    id: 'ZWE',
    value: 752283
  },
  {
    id: 'KOR',
    value: 240577
  }
]

const activities = [
  {
    id: 1,
    activity:
      "Earth's surface temperature could exceed historical values as early as 2047.",
    time: 'July, 03 2024 00:00:00'
  },
  {
    id: 2,
    activity: 'Non-OPEC supply growth is expected to grind to a halt in 2016.',
    time: 'July, 03 2024 01:00:00'
  },
  {
    id: 3,
    activity:
      'The U.S. could shoulder even more of the weight of global oil production in the future.',
    time: 'July, 03 2024 02:00:00'
  },
  {
    id: 4,
    activity:
      'The low price of oil is leading to questions about the projected high demand for EV sales',
    time: 'July, 05 2016 00:00:00'
  },
  {
    id: 5,
    activity:
      'The continued fallout from Brexit could keep oil prices lower for longer',
    time: 'July, 03 2024 09:00:00'
  },
  {
    id: 5,
    activity: "Fracking's importance will not be going away anytime soon",
    time: 'July, 03 2024 09:00:00'
  },
  {
    id: 5,
    activity:
      'Exploratory drilling off Cyprus southern shore will begin next year.',
    time: 'July, 03 2024 09:00:00'
  },
  {
    id: 5,
    activity:
      'A well-diversified fuel basket for India could perforce imply much higher contributions of natural gas..',
    time: 'July, 03 2024 09:00:00'
  }
]
export default { data, data2, activities }
