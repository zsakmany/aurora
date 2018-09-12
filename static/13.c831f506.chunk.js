webpackJsonp([13],{973:function(n,e,t){var o=t(2),a=t(56),i=t(19).PageRenderer;i.__esModule&&(i=i.default);var l=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(990)}},componentWillMount:function(){},render:function(){return o.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});l.__catalog_loader__=!0,n.exports=l},990:function(n,e){n.exports='### DayTile\n\nDayTile Component\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: children\n    Type: node\n    Default: "null"\n    Notes: Optional\n  - Prop: ctaButtons\n    Type: array<DayTile.Button>\n    Notes: Optional. CTA Buttons / Links corresponding to the data displayed (eg. links to EDP). Usage of <DayTile.Button /> component is required to in order to get proper button\'s style.\n  - Prop: dateLabel\n    Type: node\n    Notes: Required. A numeric "day of month" value\n  - Prop: image\n    Type: node\n    Default: "null"\n    Notes: Optional. A thumbnail to display\n  - Prop: isDisabled\n    Type: boolean\n    Default: "false"\n    Notes: Optional. A flag that controls disabled state (eg. in case there are no events on that date)\n  - Prop: isHighlighted\n    Type: boolean\n    Default: "false"\n    Notes: Optional. A flag that controls highlighted state (eg. in case of present local events)\n  - Prop: moreButton\n    Type: element\n    Default: "null"\n    Notes: Optional. A button to use in place of More Button (eg. if more than 2 CTA buttons required, a "+X More y" label is recommended)\n  - Prop: onOverflowClick\n    Type: function\n    Notes: Optional. An `onClick` handler for the Overflow Button\n  - Prop: subTitle\n    Type: string\n    Notes: Optional. A text that represents secondary data\n  - Prop: title\n    Type: string\n    Notes: Optional. A text that represents primary data\n  - Prop: withOverflow\n    Type: boolean\n    Default: "false"\n    Notes: Optional. A flag that controls wether the Overflow Button will be displayed or not\n  - Prop: ...props\n    Type: any\n    Notes: Optional. Passes through any other props to underlying DOM element.\n```\n\n### DayTile\n\n```react\nresponsive: true\n---\n<DayTile\n  dateLabel="10"\n  title="Henderson, NV \u2014 Sunset Station Outdoor Amphitheater"\n  subTitle="On Sale: Fri, 08/17/18 10:00 AM"\n  ctaButtons={\n    [\n      <DayTile.Button>2:00 pm</DayTile.Button>,\n      <DayTile.Button>6:00 pm</DayTile.Button>\n    ]\n  }\n  moreButton={\n    <DayTile.MoreButton\n      onClick={() => {\n        alert(\'More Button Clicked\');\n      }}\n    >\n      +4 More Times\n    </DayTile.MoreButton>\n  }\n  onOverflowClick={() => {\n    alert(\'Overflow Button Clicked\');\n  }}\n  withOverflow\n>\n</DayTile>\n```\n\n### DayTile (highlighted)\n\n```react\nresponsive: true\n---\n<DayTile\n  dateLabel="10"\n  title="Henderson, NV \u2014 Sunset Station Outdoor Amphitheater"\n  subTitle="On Sale: Fri, 08/17/18 10:00 AM"\n  ctaButtons={\n    [\n      <DayTile.Button>2:00 pm</DayTile.Button>,\n      <DayTile.Button>6:00 pm</DayTile.Button>\n    ]\n  }\n  moreButton={\n    <DayTile.MoreButton\n      onClick={() => {\n        alert(\'More Button Clicked\');\n      }}\n    >\n      +4 More Times\n    </DayTile.MoreButton>\n  }\n  onOverflowClick={() => {\n    alert(\'Overflow Button Clicked\');\n  }}\n  withOverflow\n  isHighlighted\n>\n</DayTile>\n```\n\n### DayTile with image\n\n```react\nresponsive: true\n---\n<DayTile\n  dateLabel="10"\n  title="Henderson, NV \u2014 Sunset Station Outdoor Amphitheater"\n  subTitle="On Sale: Fri, 08/17/18 10:00 AM"\n  image={\n    <ResponsiveImage\n      src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"\n      width={360}\n      height={180}\n      alt="Hard Rock Rocksino Northfield Park Hard Rock Live"\n    />\n  }\n  ctaButtons={\n    [\n      <DayTile.Button>2:00 pm</DayTile.Button>,\n      <DayTile.Button>6:00 pm</DayTile.Button>\n    ]\n  }\n  moreButton={\n    <DayTile.MoreButton\n      onClick={() => {\n        alert(\'More Button Clicked\');\n      }}\n    >\n      +4 More Times\n    </DayTile.MoreButton>\n  }\n  onOverflowClick={() => {\n    alert(\'Overflow Button Clicked\');\n  }}\n  withOverflow\n>\n</DayTile>\n```\n\n### DayTile with image (highlighted)\n\n```react\nresponsive: true\n---\n<DayTile\n  dateLabel="10"\n  title="Henderson, NV \u2014 Sunset Station Outdoor Amphitheater"\n  subTitle="On Sale: Fri, 08/17/18 10:00 AM"\n  image={\n    <ResponsiveImage\n      src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"\n      width={360}\n      height={180}\n      alt="Hard Rock Rocksino Northfield Park Hard Rock Live"\n    />\n  }\n  ctaButtons={\n    [\n      <DayTile.Button>2:00 pm</DayTile.Button>,\n      <DayTile.Button>6:00 pm</DayTile.Button>\n    ]\n  }\n  moreButton={\n    <DayTile.MoreButton\n      onClick={() => {\n        alert(\'More Button Clicked\');\n      }}\n    >\n      +4 More Times\n    </DayTile.MoreButton>\n  }\n  withOverflow\n  isHighlighted\n>\n</DayTile>\n```\n\n### DayTile (disabled)\n\n```react\nresponsive: true\n---\n<DayTile\n  dateLabel="10"\n  isDisabled\n>\n</DayTile>\n```\n'}});
//# sourceMappingURL=13.c831f506.chunk.js.map