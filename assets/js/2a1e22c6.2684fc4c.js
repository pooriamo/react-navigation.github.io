(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6234],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return b}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,h=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),o=n(80944),i=n(86010),r="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,d=e.groupId,b=e.className,h=(0,o.Z)(),m=h.tabGroupChoices,k=h.setTabGroupChoices,g=(0,a.useState)(p),f=g[0],v=g[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var C=m[d];null!=C&&C!==f&&u.some((function(e){return e.value===C}))&&v(C)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;v(a),null!=d&&(k(d,a),setTimeout((function(){var e,n,a,o,i,r,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,i=e.right,r=window,s=r.innerHeight,c=r.innerWidth,n>=0&&i<=c&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),o=n(79443);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},70011:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),r=n(41395),l=n(58215),s={id:"bottom-tab-navigator",title:"Bottom Tabs Navigator",sidebar_label:"Bottom Tabs"},c={unversionedId:"bottom-tab-navigator",id:"version-6.x/bottom-tab-navigator",isDocsHomePage:!1,title:"Bottom Tabs Navigator",description:"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-6.x/bottom-tab-navigator.md",sourceDirName:".",slug:"/bottom-tab-navigator",permalink:"/docs/6.x/bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/bottom-tab-navigator.md",version:"6.x",sidebar_label:"Bottom Tabs",frontMatter:{id:"bottom-tab-navigator",title:"Bottom Tabs Navigator",sidebar_label:"Bottom Tabs"},sidebar:"version-6.x/docs",previous:{title:"Drawer Navigator",permalink:"/docs/6.x/drawer-navigator"},next:{title:"Material Bottom Tabs Navigator",permalink:"/docs/6.x/material-bottom-tab-navigator"}},p=[{value:"API Definition",id:"api-definition",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"<code>tabBarLabelPosition</code>",id:"tabbarlabelposition",children:[]},{value:"Header related options",id:"header-related-options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused."),(0,i.kt)("div",{style:{display:"flex",margin:"16px 0"}},(0,i.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.kt)("source",{src:"/assets/navigators/tabs/bottom-tabs-demo.mov"}))),(0,i.kt)("p",null,"To use this navigator, ensure that you have ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/getting-started"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/bottom-tabs")),":"),(0,i.kt)(r.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/bottom-tabs@next\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/bottom-tabs@next\n")))),(0,i.kt)("h2",{id:"api-definition"},"API Definition"),(0,i.kt)("p",null,"To use this tab navigator, import it from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs"),":"),(0,i.kt)("samp",{id:"tab-based-navigation-minimal"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { createBottomTabNavigator } from \'@react-navigation/bottom-tabs\';\n\nconst Tab = createBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/tab-based-navigation"},"Tab Navigation"))),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),(0,i.kt)("h4",{id:"initialroutename"},(0,i.kt)("inlineCode",{parentName:"h4"},"initialRouteName")),(0,i.kt)("p",null,"The name of the route to render on first load of the navigator."),(0,i.kt)("h4",{id:"screenoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"screenOptions")),(0,i.kt)("p",null,"Default options to use for the screens in the navigator."),(0,i.kt)("h4",{id:"backbehavior"},(0,i.kt)("inlineCode",{parentName:"h4"},"backBehavior")),(0,i.kt)("p",null,"This controls how going back in the navigator is handled. This includes when the back button is pressed/back gesture is performed, or ",(0,i.kt)("inlineCode",{parentName:"p"},"goBack")," is called."),(0,i.kt)("p",null,"It supports the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"firstRoute")," - return to the first tab (default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute")," - return to initial tab"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"order")," - return to previous tab (in the order they are shown in the tab bar)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"history")," - return to last visited tab"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none")," - do not handle back button")),(0,i.kt)("h4",{id:"detachinactivescreens"},(0,i.kt)("inlineCode",{parentName:"h4"},"detachInactiveScreens")),(0,i.kt)("p",null,"Boolean used to indicate whether inactive screens should be detached from the view hierarchy to save memory. Make sure to call ",(0,i.kt)("inlineCode",{parentName:"p"},"enableScreens")," from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},"react-native-screens")," to make it work. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h4",{id:"scenecontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"sceneContainerStyle")),(0,i.kt)("p",null,"Style object for the component wrapping the screen content."),(0,i.kt)("h4",{id:"tabbar"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBar")),(0,i.kt)("p",null,"Function that returns a React element to display as the tab bar."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("samp",{id:"custom-tab-bar"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { View, Text, TouchableOpacity } from 'react-native';\n\nfunction MyTabBar({ state, descriptors, navigation }) {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      {state.routes.map((route, index) => {\n        const { options } = descriptors[route.key];\n        const label =\n          options.tabBarLabel !== undefined\n            ? options.tabBarLabel\n            : options.title !== undefined\n            ? options.title\n            : route.name;\n\n        const isFocused = state.index === index;\n\n        const onPress = () => {\n          const event = navigation.emit({\n            type: 'tabPress',\n            target: route.key,\n            canPreventDefault: true,\n          });\n\n          if (!isFocused && !event.defaultPrevented) {\n            navigation.navigate(route.name);\n          }\n        };\n\n        const onLongPress = () => {\n          navigation.emit({\n            type: 'tabLongPress',\n            target: route.key,\n          });\n        };\n\n        return (\n          <TouchableOpacity\n            accessibilityRole=\"button\"\n            accessibilityState={isFocused ? { selected: true } : {}}\n            accessibilityLabel={options.tabBarAccessibilityLabel}\n            testID={options.tabBarTestID}\n            onPress={onPress}\n            onLongPress={onLongPress}\n            style={{ flex: 1 }}\n          >\n            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>\n              {label}\n            </Text>\n          </TouchableOpacity>\n        );\n      })}\n    </View>\n  );\n}\n\n// ...\n\n<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>\n  {...}\n</Tab.Navigator>\n")),(0,i.kt)("p",null,"This example will render a basic tab bar with labels."),(0,i.kt)("p",null,"Note that you ",(0,i.kt)("strong",{parentName:"p"},"cannot")," use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useNavigation")," hook inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBar")," since ",(0,i.kt)("inlineCode",{parentName:"p"},"useNavigation")," is only available inside screens. You get a ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop for your ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBar")," which you can use instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function MyTabBar({ navigation }) {\n  return (\n    <Button\n      title=\"Go somewhere\"\n      onPress={() => {\n        // Navigate using the `navigation` prop that you received\n        navigation.navigate('SomeScreen');\n      }}\n    />\n  );\n}\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("p",null,"The following ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/screen-options"},"options")," can be used to configure the screens in the navigator:"),(0,i.kt)("h4",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")),(0,i.kt)("p",null,"Generic title that can be used as a fallback for ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,i.kt)("h4",{id:"tabbarlabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,i.kt)("p",null,"Title string of a tab displayed in the tab bar or a function that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),(0,i.kt)("h4",{id:"tabbarshowlabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarShowLabel")),(0,i.kt)("p",null,"Whether the tab label should be visible. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"tabbarlabelposition"},(0,i.kt)("inlineCode",{parentName:"h3"},"tabBarLabelPosition")),(0,i.kt)("p",null,"Whether the label is shown below the icon or beside the icon."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"below-icon"),": the label is shown below the icon (typical for iPhones)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"beside-icon")," the label is shown next to the icon (typical for iPad)")),(0,i.kt)("p",null,"By default, the position is chosen automatically based on device width."),(0,i.kt)("h4",{id:"tabbarlabelstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarLabelStyle")),(0,i.kt)("p",null,"Style object for the tab label."),(0,i.kt)("h4",{id:"tabbaricon"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,i.kt)("p",null,"Function that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string, size: number }")," returns a React.Node, to display in the tab bar."),(0,i.kt)("h4",{id:"tabbariconstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarIconStyle")),(0,i.kt)("p",null,"Style object for the tab icon."),(0,i.kt)("h4",{id:"tabbarbadge"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarBadge")),(0,i.kt)("p",null,"Text to show in a badge on the tab icon. Accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,i.kt)("h4",{id:"tabbarbadgestyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarBadgeStyle")),(0,i.kt)("p",null,"Style for the badge on the tab icon. You can specify a background color or text color here."),(0,i.kt)("h4",{id:"tabbaraccessibilitylabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),(0,i.kt)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),(0,i.kt)("h4",{id:"tabbartestid"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarTestID")),(0,i.kt)("p",null,"ID to locate this tab button in tests."),(0,i.kt)("h4",{id:"tabbarbutton"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarButton")),(0,i.kt)("p",null,"Function which returns a React element to render as the tab bar button. It wraps the icon and label. Renders ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable")," by default."),(0,i.kt)("p",null,"You can specify a custom implementation here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tabBarButton: props => <TouchableOpacity {...props} />\n")),(0,i.kt)("h4",{id:"tabbaractivetintcolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarActiveTintColor")),(0,i.kt)("p",null,"Color for the icon and label in the active tab."),(0,i.kt)("h4",{id:"tabbarinactivetintcolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarInactiveTintColor")),(0,i.kt)("p",null,"Color for the icon and label in the inactive tabs."),(0,i.kt)("h4",{id:"tabbaractivebackgroundcolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarActiveBackgroundColor")),(0,i.kt)("p",null,"Background color for the active tab."),(0,i.kt)("h4",{id:"tabbarinactivebackgroundcolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarInactiveBackgroundColor")),(0,i.kt)("p",null,"Background color for the inactive tabs."),(0,i.kt)("h5",{id:"tabbarhideonkeyboard"},(0,i.kt)("inlineCode",{parentName:"h5"},"tabBarHideOnKeyboard")),(0,i.kt)("p",null,"Whether the tab bar is hidden when the keyboard opens. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h5",{id:"tabbaritemstyle"},(0,i.kt)("inlineCode",{parentName:"h5"},"tabBarItemStyle")),(0,i.kt)("p",null,"Style object for the tab item container."),(0,i.kt)("h5",{id:"tabbarstyle"},(0,i.kt)("inlineCode",{parentName:"h5"},"tabBarStyle")),(0,i.kt)("p",null,"Style object for the tab bar. You can configure styles such as background color here."),(0,i.kt)("p",null,"To show your screen under the tab bar, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," style to absolute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<Tab.Navigator\n  screenOptions={{\n    tabBarStyle: { position: 'absolute' },\n  }}\n>\n")),(0,i.kt)("p",null,"You also might need to add a bottom margin to your content if you have a absolutely positioned tab bar. React Navigation won't do it automatically."),(0,i.kt)("p",null,"To get the height of the bottom tab bar, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomTabBarHeightContext")," with ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#contextconsumer"},"React's Context API")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"useBottomTabBarHeight"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';\n\n// ...\n\n<BottomTabBarHeightContext.Consumer>\n  {tabBarHeight => (\n    /* render something */\n  )}\n</BottomTabBarHeightContext.Consumer>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';\n\n// ...\n\nconst tabBarHeight = useBottomTabBarHeight();\n")),(0,i.kt)("h4",{id:"tabbarbackground"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarBackground")),(0,i.kt)("p",null,"Function which returns a React Element to use as background for the tab bar. You could render an image, a gradient, blur view etc.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { BlurView } from 'expo-blur';\n\n// ...\n\n<Tab.Navigator\n  screenOptions={{\n    tabBarStyle: { position: 'absolute' },\n    tabBarBackground: () => (\n      <BlurView tint=\"light\" intensity={100} style={StyleSheet.absoluteFill} />\n    ),\n  }}\n>\n")),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"BlurView"),", make sure to set ",(0,i.kt)("inlineCode",{parentName:"p"},"position: 'absolute'")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarStyle")," as well. You'd also need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"useBottomTabBarHeight()")," to add a bottom padding to your content."),(0,i.kt)("h4",{id:"lazy"},(0,i.kt)("inlineCode",{parentName:"h4"},"lazy")),(0,i.kt)("p",null,"Whether this screens should render the first time it's accessed. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if you want to render the screen on initial render."),(0,i.kt)("h4",{id:"unmountonblur"},(0,i.kt)("inlineCode",{parentName:"h4"},"unmountOnBlur")),(0,i.kt)("p",null,"Whether this screen should be unmounted when navigating away from it. Unmounting a screen resets any local state in the screen as well as state of nested navigators in the screen. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Normally, we don't recommend enabling this prop as users don't expect their navigation history to be lost when switching tabs. If you enable this prop, please consider if this will actually provide a better experience for the user."),(0,i.kt)("h3",{id:"header-related-options"},"Header related options"),(0,i.kt)("p",null,"You can find the list of header related options ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/elements#header"},"here"),". In addition to those, the following options are also supported in bottom tabs:"),(0,i.kt)("h4",{id:"header"},(0,i.kt)("inlineCode",{parentName:"h4"},"header")),(0,i.kt)("p",null,"Function that returns a React Element to display as a header. It accepts an object containing the following properties as the argument:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigation")," - The navigation object for the current screen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"route")," - The route object for the current screen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," - The options for the current screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"layout")," - Dimensions of the screen, contains ",(0,i.kt)("inlineCode",{parentName:"li"},"height")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"width")," properties.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { getHeaderTitle } from '@react-navigation/elements';\n\n// ..\n\nheader: ({ navigation, route, options }) => {\n  const title = getHeaderTitle(options, route.name);\n\n  return <MyHeader title={title} style={options.headerStyle} />;\n};\n")),(0,i.kt)("p",null,"To set a custom header for all the screens in the navigator, you can specify this option in the ",(0,i.kt)("inlineCode",{parentName:"p"},"screenOptions")," prop of the navigator."),(0,i.kt)("h5",{id:"specify-a-height-in-headerstyle"},"Specify a ",(0,i.kt)("inlineCode",{parentName:"h5"},"height")," in ",(0,i.kt)("inlineCode",{parentName:"h5"},"headerStyle")),(0,i.kt)("p",null,"If your custom header's height differs from the default header height, then you might notice glitches due to measurement being async. Explicitly specifying the height will avoid such glitches."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"headerStyle: {\n  height: 80, // Specify the height of your custom header\n};\n")),(0,i.kt)("p",null,"Note that this style is not applied to the header by default since you control the styling of your custom header. If you also want to apply this style to your header, use ",(0,i.kt)("inlineCode",{parentName:"p"},"options.headerStyle")," from the props."),(0,i.kt)("h4",{id:"headershown"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerShown")),(0,i.kt)("p",null,"Whether to show or hide the header for the screen. The header is shown by default. Setting this to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," hides the header."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"The navigator can ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/navigation-events"},"emit events")," on certain actions. Supported events are:"),(0,i.kt)("h4",{id:"tabpress"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabPress")),(0,i.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),(0,i.kt)("li",{parentName:"ul"},"If the tab is already focused:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, you can use ",(0,i.kt)("a",{parentName:"li",href:"/docs/6.x/use-scroll-to-top"},(0,i.kt)("inlineCode",{parentName:"a"},"useScrollToTop"))," to scroll it to top"),(0,i.kt)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",(0,i.kt)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),(0,i.kt)("p",null,"To prevent the default behavior, you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),(0,i.kt)("samp",{id:"bottom-tab-prevent-default"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', (e) => {\n    // Prevent default behavior\n    e.preventDefault();\n\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,i.kt)("p",null,"If you have a custom tab bar, make sure to emit this event."),(0,i.kt)("h4",{id:"tablongpress"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabLongPress")),(0,i.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period. If you have a custom tab bar, make sure to emit this event."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabLongPress', (e) => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,i.kt)("h3",{id:"helpers"},"Helpers"),(0,i.kt)("p",null,"The tab navigator adds the following methods to the navigation prop:"),(0,i.kt)("h4",{id:"jumpto"},(0,i.kt)("inlineCode",{parentName:"h4"},"jumpTo")),(0,i.kt)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,i.kt)("em",{parentName:"li"},"string")," - Name of the route to jump to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,i.kt)("em",{parentName:"li"},"object")," - Screen params to use for the destination route.")),(0,i.kt)("samp",{id:"tab-jump-to"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"navigation.jumpTo('Profile', { owner: 'Micha\u015b' });\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("samp",{id:"bottom-tab-example"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { createBottomTabNavigator } from \'@react-navigation/bottom-tabs\';\nimport MaterialCommunityIcons from \'react-native-vector-icons/MaterialCommunityIcons\';\n\nconst Tab = createBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      tabBarOptions={{\n        activeTintColor: \'#e91e63\',\n      }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="home" color={color} size={size} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={size} />\n          ),\n          tabBarBadge: 3,\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="account" color={color} size={size} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n')))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);