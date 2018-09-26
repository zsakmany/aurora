webpackJsonp([10],{1001:function(e,n,a){var t=a(0),r=a(57),i=a(23).PageRenderer;i.__esModule&&(i=i.default);var o=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:a(1018)}},componentWillMount:function(){},render:function(){return t.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});o.__catalog_loader__=!0,e.exports=o},1018:function(e,n){e.exports='### Header Props\n\n```table\nspan: 6\nrows:\n  - Prop: deg\n    Type: object\n    Default: small = 76deg, medium = 80deg, large  = 81\n    Notes: Sets the gradient rotation per breakpoint\n  - Prop: from\n    Type: string\n    Default:\n    Notes: Starting gradient color\n  - Prop: to\n    Type: string\n    Default:\n    Notes: Ending gradient color\n  - Prop: backgroundImage\n    Type: string\n    Default:\n    Notes: Uses an image as background instead of a gradient.\n  - Prop: withOverlay\n    Type: boolean\n    Notes: Applies a dark gradient to header\n```\n\n### Heading Props\n\n```table\nspan: 6\nrows:\n  - Prop: level\n    Type: number\n    Default: 2\n    Notes: Renders the appropriate h tag at level in number\n```\n\n```react\nresponsive: true\n---\n<Header\n  withSpotLight\n>\n    <Heading level={1}>\n        <Heading.Strong>Generic</Heading.Strong>\n        {" "}\n        <Heading.Span>Header</Heading.Span>\n    </Heading>\n</Header>\n```\n\n### Image Header\n\n```react\nresponsive: true\n---\n<ThemeProvider theme={{ themeName: "tm"}}>\n  <React.Fragment>\n  <HeaderWithImage\n    withSpotLight\n  >\n    <Column medium={7} large={8}>\n      <Row>\n        <Breadcrumb>\n          <Breadcrumb.Item position="1" href="/home">Home</Breadcrumb.Item>\n          <Breadcrumb.Item position="2" href="/concerts">Concert Tickets</Breadcrumb.Item>\n          <Breadcrumb.Item position="3">Rock</Breadcrumb.Item>\n        </Breadcrumb>\n        <RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20" style={ratingBadgeStyles}>\n            4.8\n        </RatingBadge>\n      </Row>\n      <Heading level={1}>\n          <Heading.Strong>Generic</Heading.Strong>\n          {" "}\n          <Heading.Span>Header</Heading.Span>\n      </Heading>\n    </Column>\n    <Column medium={5} large={4}>\n      <HeaderWithImage.ImageWrapper>\n        <ImageCard src="https://placekitten.com/g/400/242" />\n      </HeaderWithImage.ImageWrapper>\n    </Column>\n  </HeaderWithImage>\n  <div>Some other content</div>\n  </React.Fragment>\n</ThemeProvider>\n```\n\n### Image Header with Image Background\n\n```react\nresponsive: true\n---\n<ThemeProvider theme={{ themeName: "tm"}}>\n<React.Fragment>\n  <HeaderWithImage\n    withOverlay\n    backgroundImage="https://www.ticketmaster.com/new/compressedimages/dam/a/03e/154a8956-41a7-4508-a320-95f43764a03e_690051_TABLET_LANDSCAPE_16_9.jpg?width=2&height=1&fit=crop"\n  >\n    <Column medium={7} large={8}>\n      <Row>\n        <Breadcrumb>\n          <Breadcrumb.Item position="1" href="/home">Home</Breadcrumb.Item>\n          <Breadcrumb.Item position="2" href="/concerts">Concert Tickets</Breadcrumb.Item>\n          <Breadcrumb.Item position="3">Rock</Breadcrumb.Item>\n        </Breadcrumb>\n        <RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20" style={ratingBadgeStyles}>\n            4.8\n        </RatingBadge>\n      </Row>\n      <Heading level={1}>\n          <Heading.Strong>Generic</Heading.Strong>\n          {" "}\n          <Heading.Span>Header</Heading.Span>\n      </Heading>\n    </Column>\n    <Column medium={5} large={4}>\n      <HeaderWithImage.ImageWrapper>\n        <ImageCard\n          src="https://www.ticketmaster.com/new/compressedimages/dam/a/03e/154a8956-41a7-4508-a320-95f43764a03e_690051_TABLET_LANDSCAPE_16_9.jpg?width=448&height=252&fit=crop"\n          withOverlay={false}\n        />\n      </HeaderWithImage.ImageWrapper>\n    </Column>\n  </HeaderWithImage>\n  <div>Some other content</div>\n  </React.Fragment>\n</ThemeProvider>\n```\n\n### Image Header with Underlaid Image Background\n\n```react\nresponsive: true\n---\n<React.Fragment>\n  <HeaderWithImage\n    withUnderlay={true}\n    backgroundImage="https://beta.tmol.co/s3images/City/losangeles_889.jpg"\n    backgroundImageProps={{ deg: { small: "40deg", medium: "39deg", large: "25deg" }, stops: [colors.defaultGradient.from, colors.heliotrope.base ], style: { backgroundPosition: "center" } }}\n  >\n    <Column medium={7} large={8}>\n      <Heading level={1}>\n          <Heading.Strong>City</Heading.Strong>\n          {" "}\n          <Heading.Span>Header</Heading.Span>\n      </Heading>\n    </Column>\n  </HeaderWithImage>\n  <div>Some other content</div>\n</React.Fragment>\n```\n\n### Image Header with Underlaid Image Background\n\n```react\nresponsive: true\n---\n<React.Fragment>\n  <HeaderWithImage\n    withUnderlay={true}\n    withSpotLight={true}\n    backgroundImage="https://beta.tmol.co/s3images/City/losangeles_889.jpg"\n  >\n    <Column medium={7} large={8}>\n      <Heading level={1}>\n          <Heading.Strong>City</Heading.Strong>\n          {" "}\n          <Heading.Span>Header</Heading.Span>\n      </Heading>\n    </Column>\n  </HeaderWithImage>\n  <div>Some other content</div>\n</React.Fragment>\n```\n'}});
//# sourceMappingURL=10.350a107f.chunk.js.map