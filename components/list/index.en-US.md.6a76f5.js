(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/list/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/index.en-US.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/index.en-US.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"Simple List.\"\n    ],\n    [\n      \"h2\",\n      \"When To Use\"\n    ],\n    [\n      \"p\",\n      \"A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"type\": \"Data Display\",\n    \"title\": \"List\",\n    \"cols\": 1,\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg\",\n    \"filename\": \"components/list/index.en-US.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#When-To-Use\",\n          \"title\": \"When To Use\"\n        },\n        \"When To Use\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"h3\",\n      \"List\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"bordered\"\n          ],\n          [\n            \"td\",\n            \"Toggles rendering of the border around the list\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dataSource\"\n          ],\n          [\n            \"td\",\n            \"DataSource array for list\"\n          ],\n          [\n            \"td\",\n            \"any\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"footer\"\n          ],\n          [\n            \"td\",\n            \"List footer renderer\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"grid\"\n          ],\n          [\n            \"td\",\n            \"The grid type of list. You can set grid to something like {gutter: 16, column: 4}\"\n          ],\n          [\n            \"td\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"#List-grid-props\"\n              },\n              \"object\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"header\"\n          ],\n          [\n            \"td\",\n            \"List header renderer\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"itemLayout\"\n          ],\n          [\n            \"td\",\n            \"The layout of list\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"horizontal\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"vertical\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"horizontal\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"loading\"\n          ],\n          [\n            \"td\",\n            \"Shows a loading indicator while the contents of the list are being fetched\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" \",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"/components/spin/#API\"\n              },\n              \"SpinProps\"\n            ],\n            \" (\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://github.com/ant-design/ant-design/issues/8659\"\n              },\n              \"more\"\n            ],\n            \")\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"loadMore\"\n          ],\n          [\n            \"td\",\n            \"Shows a load more content\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"locale\"\n          ],\n          [\n            \"td\",\n            \"The i18n text including empty text\"\n          ],\n          [\n            \"td\",\n            \"object\"\n          ],\n          [\n            \"td\",\n            \"{emptyText: \",\n            [\n              \"code\",\n              \"No Data\"\n            ],\n            \"}\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"pagination\"\n          ],\n          [\n            \"td\",\n            \"Pagination \",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"/components/pagination/\"\n              },\n              \"config\"\n            ],\n            \", hide it by setting it to false\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"renderItem\"\n          ],\n          [\n            \"td\",\n            \"Customize list item when using \",\n            [\n              \"code\",\n              \"dataSource\"\n            ]\n          ],\n          [\n            \"td\",\n            \"(item) => ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"rowKey\"\n          ],\n          [\n            \"td\",\n            \"Item's unique value, could be an Item's key which holds a unique value of type \",\n            [\n              \"code\",\n              \"React.Key\"\n            ],\n            \" or function that receives Item and returns a \",\n            [\n              \"code\",\n              \"React.Key\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"keyof\"\n            ],\n            \" T \",\n            \"|\",\n            \" (item: T) => \",\n            [\n              \"code\",\n              \"React.Key\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"\\\"key\\\"\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"size\"\n          ],\n          [\n            \"td\",\n            \"Size of list\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"default\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"large\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"small\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"default\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"split\"\n          ],\n          [\n            \"td\",\n            \"Toggles rendering of the split under the list item\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"pagination\"\n    ],\n    [\n      \"p\",\n      \"Properties for pagination.\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"position\"\n          ],\n          [\n            \"td\",\n            \"The specify the position of \",\n            [\n              \"code\",\n              \"Pagination\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"top\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"bottom\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"both\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"bottom\"\n            ]\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      \"More about pagination, please check \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"/components/pagination/\"\n        },\n        [\n          \"code\",\n          \"Pagination\"\n        ]\n      ],\n      \".\"\n    ],\n    [\n      \"h3\",\n      \"List grid props\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"column\"\n          ],\n          [\n            \"td\",\n            \"The column of grid\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"gutter\"\n          ],\n          [\n            \"td\",\n            \"The spacing between grid\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"0\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"xs\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"<576px\"\n            ],\n            \" column of grid\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"sm\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"≥576px\"\n            ],\n            \" column of grid\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"md\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"≥768px\"\n            ],\n            \" column of grid\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"lg\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"≥992px\"\n            ],\n            \" column of grid\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"xl\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"≥1200px\"\n            ],\n            \" column of grid\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"xxl\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"≥1600px\"\n            ],\n            \" column of grid\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"List.Item\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"actions\"\n          ],\n          [\n            \"td\",\n            \"The actions content of list item. If \",\n            [\n              \"code\",\n              \"itemLayout\"\n            ],\n            \" is \",\n            [\n              \"code\",\n              \"vertical\"\n            ],\n            \", shows the content on bottom, otherwise shows content on the far right\"\n          ],\n          [\n            \"td\",\n            \"Array\",\n            \"<\",\n            \"ReactNode>\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"extra\"\n          ],\n          [\n            \"td\",\n            \"The extra content of list item. If \",\n            [\n              \"code\",\n              \"itemLayout\"\n            ],\n            \" is \",\n            [\n              \"code\",\n              \"vertical\"\n            ],\n            \", shows the content on right, otherwise shows content on the far right\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"List.Item.Meta\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"avatar\"\n          ],\n          [\n            \"td\",\n            \"The avatar of list item\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"description\"\n          ],\n          [\n            \"td\",\n            \"The description of list item\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"title\"\n          ],\n          [\n            \"td\",\n            \"The title of list item\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/list/index.en-US.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);