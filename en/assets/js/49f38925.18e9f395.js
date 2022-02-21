"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[4781],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<r;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2601:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),s=["components"],l={title:"React",extends:"_layouts.documentation",description:"React Dev Snippets",section:"content"},c="React",i={unversionedId:"react/index",id:"react/index",title:"React",description:"React Dev Snippets",source:"@site/docs/react/index.md",sourceDirName:"react",slug:"/react/",permalink:"/my-docs/en/docs/react/",editUrl:"https://github.com/easy-quest/my-docs/edit/master/website/docs/react/index.md",tags:[],version:"current",frontMatter:{title:"React",extends:"_layouts.documentation",description:"React Dev Snippets",section:"content"},sidebar:"tutorialSidebar",previous:{title:"Rails",permalink:"/my-docs/en/docs/rails/"},next:{title:"REST API",permalink:"/my-docs/en/docs/restapi/"}},u=[{value:"Components",id:"components",children:[{value:"Simple Component",id:"simple-component",children:[],level:3},{value:"Stateful Components",id:"stateful-components",children:[],level:3},{value:"UseEffect &amp; UseState Hook",id:"useeffect--usestate-hook",children:[],level:3},{value:"Context Provider Component",id:"context-provider-component",children:[],level:3},{value:"Context Consumer Component",id:"context-consumer-component",children:[],level:3},{value:"Context Provider Component with useState Hook",id:"context-provider-component-with-usestate-hook",children:[],level:3},{value:"useContext Hook",id:"usecontext-hook",children:[],level:3},{value:"Functional Components",id:"functional-components",children:[],level:3},{value:"Hooks in Combination with setInterval()",id:"hooks-in-combination-with-setinterval",children:[],level:3},{value:"User Input Components",id:"user-input-components",children:[],level:3},{value:"setState() Best Practices",id:"setstate-best-practices",children:[],level:3},{value:"Hook for throttling value change",id:"hook-for-throttling-value-change",children:[],level:3},{value:"Hook for debouncing value change",id:"hook-for-debouncing-value-change",children:[],level:3},{value:"Rendering your react component to the DOM",id:"rendering-your-react-component-to-the-dom",children:[],level:3},{value:"Rendering component for each array item",id:"rendering-component-for-each-array-item",children:[],level:3},{value:"Using Refs to access DOM properties",id:"using-refs-to-access-dom-properties",children:[],level:3},{value:"Create a list by passing an array",id:"create-a-list-by-passing-an-array",children:[],level:3},{value:"Create an element without using JSX",id:"create-an-element-without-using-jsx",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react"},"React"),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("h3",{id:"simple-component"},"Simple Component"),(0,r.kt)("p",null,"React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class HelloMessage extends React.Component {\n  render() {\n    return <div>Hello {this.props.name}</div>;\n  }\n}\n\nReactDOM.render(\n  <HelloMessage name=\"Rick\" />,\n  document.getElementById('hello-example')\n);\n")),(0,r.kt)("h3",{id:"stateful-components"},"Stateful Components"),(0,r.kt)("p",null,"In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component\u2019s state data changes, the rendered markup will be updated by re-invoking render()."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class Timer extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { seconds: 0 };\n  }\n\n  tick() {\n    this.setState(state => ({\n      seconds: state.seconds + 1\n    }));\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => this.tick(), 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    return <div>Seconds: {this.state.seconds}</div>;\n  }\n}\n\nReactDOM.render(<Timer />, document.getElementById('timer-example'));\n")),(0,r.kt)("h3",{id:"useeffect--usestate-hook"},"UseEffect & UseState Hook"),(0,r.kt)("p",null,"Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. The Effect Hook lets you perform side effects in function components. The State Hook lets you manage state in a functional component."),(0,r.kt)("p",null,"Here is the above code snippet, using Hooks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Timer(props) {\n\n  // declare your state variable, a function to modify it, and set an initial value\n  const [seconds, setSeconds] = useState(0);\n\n  const tick = () => {\n    setSeconds(seconds + 1);\n  }\n  \n  useEffect(() => {\n    const interval = setInterval(() => {\n      // this will run every second!\n      tick();\n    }, 1000);\n    // you can return a 'clean up' function which will run when the component unmounts\n    return () => clearInterval(interval);\n  }, []);\n\n  return (\n    <div>\n      Seconds: {seconds}\n    </div>\n  );\n}\n\nReactDOM.render(\n  <Timer />,\n  document.getElementById('timer-example')\n);\n")),(0,r.kt)("h3",{id:"context-provider-component"},"Context Provider Component"),(0,r.kt)("p",null,"Context is a way or providing global state to a React application. There are two parts to Context, a Provider and a Consumer. A Context Provider Component allows all components rendered inside to access the value passed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { createContext } from 'react';\n\nconst MyContext = React.createContext(defaultValue);\n\nclass ContextProvider extends React.Component {\n  state = {\n    key: 'value'\n  };\n  render() {\n    return (\n      <MyContext.Provider value={this.state}>\n        {this.props.children} // all children can access value using a consumer\n        or useContext\n      </MyContext.Provider>\n    );\n  }\n}\n\nexport default ContextProvider;\n")),(0,r.kt)("h3",{id:"context-consumer-component"},"Context Consumer Component"),(0,r.kt)("p",null,"Context is a way or providing global state to a React application. There are two parts to Context, a Provider and a Consumer. The Context Consumer component allows access to the value in the provider via a 'render prop' pattern."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport MyContext from '../ContextProvider';\n\nclass AnyComponent extends React.Component {\n  render() {\n    return (\n      <MyContext.Consumer>\n        {value => {\n          return <p>now we can render the {value}</p>;\n        }}\n      </MyContext.Consumer>\n    );\n  }\n}\n\nexport default AnyComponent;\n")),(0,r.kt)("h3",{id:"context-provider-component-with-usestate-hook"},"Context Provider Component with useState Hook"),(0,r.kt)("p",null,"Here we use a similar context example as above. However instead of using a class based component, we use a functional component with the useState hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { createContext, useState } from 'react';\n\nexport const MyContext = createContext();\n\nexport const ContextProvider = props => {\n  const [state, setState] = useState({ key: 'value' });\n  return (\n    <MyContext.Provider value={{ state, setState }}>\n      {props.children}\n    </MyContext.Provider>\n  )\n}\n")),(0,r.kt)("h3",{id:"usecontext-hook"},"useContext Hook"),(0,r.kt)("p",null,"Context is a way or providing global state to a React application. There are two parts to Context, a Provider and a Consumer. The useContext hook allows access to the value in function components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useContext } from 'react';\n\nimport MyContext from '../ContextProvider';\n\nconst AnyFunctionComponent = () => {\n  const value = useContext(MyContext);\n  return <p>now we can render the {value}</p>;\n};\n\nexport default AnyFunctionComponent;\n")),(0,r.kt)("h3",{id:"functional-components"},"Functional Components"),(0,r.kt)("p",null,"Functional components are the simplest way to write components in React. They don't hold state, they don't fire lifecycle events; they simply take props and render a React Element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function MyComponent ({ name }) {\n  return <div className='message-box'>\n    Hello {name}\n  </div>\n}\n")),(0,r.kt)("p",null,"Functional Components can be written with arraow functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const Greeting = (props) => \n  <h1> Hello {props.name} </h1>;\n  \nReactDOM.render() {\n  <Greeting name="xyz" />;\n  document.getElementById("root");\n};\n')),(0,r.kt)("h3",{id:"hooks-in-combination-with-setinterval"},"Hooks in Combination with setInterval()"),(0,r.kt)("p",null,"In comparison to stateful components in React, hooks let you use features like state without the neccessity of writing a class compoent.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function useInterval(callback) {\n  const savedCallback = useRef();\n\n  useEffect(() => {\n    savedCallback.current = callback;\n  }, [callback]);\n\n  useEffect(() => {\n    const id = setInterval(() => savedCallback.current(), 1000);\n    return () => clearInterval(id);\n  });\n}\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useInterval(() => setSeconds(seconds + 1));\n\n  return (\n    <div>\n      Seconds: {seconds}\n    </div>\n  );\n}\n\nReactDOM.render(\n  <Timer />, \n  document.getElementById("timer-example")\n);\n')),(0,r.kt)("h3",{id:"user-input-components"},"User Input Components"),(0,r.kt)("p",null,"As the user types into the input field, we will store the input in our Component State and display it on the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { Component } from 'react';\n\nclass InputField extends Component {\n  state = {\n    userInput: ''\n  }\n\n  handleChange = (e) => {\n    this.setState({\n      userInput: e.target.value\n    })\n  }\n\n  render() {\n    return (\n      <div style={{paddingLeft: '5%'}}>\n       <input onChange={(e) => this.handleChange(e)}type=\"text\" />\n       <p><strong>You have typed:</strong> {this.state.userInput}</p>\n      </div>\n    );\n  }\n}\n\nexport default InputField;\n")),(0,r.kt)("h3",{id:"setstate-best-practices"},"setState() Best Practices"),(0,r.kt)("p",null,"The most common confusion in using React is ",(0,r.kt)("inlineCode",{parentName:"p"},"setState()")," function, Here's some tips on how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"setState()")," properly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class Lock extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { locked: false };\n  }\n  unlock = () => {\n    // we can access previous state via passing function\n    this.setState(state => ({\n      locked: !state.locked\n    }));\n  }\n  lock = () => {\n    // setState is an asynchronous function, so that there are times that, it can't return the mutate state \n    // immediately, but using the second parameter in setState(), you can now access the new state value.\n    this.setState({locked: true}, () => {\n      console.log(this.state.locked);\n    })\n  }\n  \n  combinedSetState = () => {\n    // We can actually combined this ways :)  \n    this.setState(state => ({\n      locked: !state.locked\n    }), () => {\n      console.log(this.state.locked);\n    })\n  }\n  componentDidMount() {\n    this.unlock()\n  }\n  render() {\n    return (\n      <div>\n        Is locked: {this.state.locked}\n      </div>\n    );\n  }\n}\nReactDOM.render(\n  <Lock />,\n  document.getElementById('lock')\n);\n\n")),(0,r.kt)("h3",{id:"hook-for-throttling-value-change"},"Hook for throttling value change"),(0,r.kt)("p",null,"A custom hook to help throttling changes to variables. Especially useful when automatically queriying api's based on user text-input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState, useEffect, useRef } from 'react';\n\nconst useThrottle = (value, limit = 300) => {\n  const [throttledValue, setThrottledValue] = useState();\n  const lastRan = useRef(Date.now());\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      if (Date.now() - lastRan.current >= limit) {\n        setThrottledValue(value);\n        lastRan.current = Date.now();\n      }\n    }, limit - (Date.now() - lastRan.current));\n\n    return () => {\n      clearTimeout(handler);\n    };\n  }, [value, limit]);\n\n  return throttledValue;\n};\n\n")),(0,r.kt)("h3",{id:"hook-for-debouncing-value-change"},"Hook for debouncing value change"),(0,r.kt)("p",null,"A similar custom hook to help debouncing changes to variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState, useEffect } from 'react';\n\nfunction useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n    return () => {\n      clearTimeout(handler);\n    };\n  }, [delay, value]);\n  return debouncedValue;\n}\n\n")),(0,r.kt)("h3",{id:"rendering-your-react-component-to-the-dom"},"Rendering your react component to the DOM"),(0,r.kt)("p",null,"Render your react element into the DOM. The id belongs to the element in which the react application will mount.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport ReactDOM from 'react-dom'\n\nimport App from './app'\n\nReactDOM.render(<App />, document.getElementById('foo-bar'))\n")),(0,r.kt)("h3",{id:"rendering-component-for-each-array-item"},"Rendering component for each array item"),(0,r.kt)("p",null,"Let's supose that you have to create component that renders a job list."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"JobContent component")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const JobContent = ({ children }) => (\n  <ul>\n    {children}\n  </ul>\n);\nexport default JobContent;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"JobItem component")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const JobItem = ({{name}}) => (\n  <li>\n    <h4{name}</h4>\n  </li>\n);\nexport default JobItem;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Map")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const renderJobItems = jobs => {\n  jobs.map(jobItem => (\n    <JobItem name={jobItem.name} />\n  ));\n}\nconst RenderJobs = ({jobs}) => (\n  <JobContent>\n    {renderJobItems(jobs)}\n  </JobContent>\n)\nexport const RenderJobs;\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Just pass jobs array to RenderJobs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const jobs = ['Software Engineer', 'Tech Recruiter']\n<RenderJobs jobs={jobs} />\n);\n")),(0,r.kt)("h3",{id:"using-refs-to-access-dom-properties"},"Using Refs to access DOM properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyComponent extends Component {\n  componentDidMount() {\n    this.input.focus();\n  }\n  render() {\n    return (\n      <div>\n        <input ref={el => (this.input = el)} />\n      </div>\n    );\n  }\n}\n")),(0,r.kt)("h3",{id:"create-a-list-by-passing-an-array"},"Create a list by passing an array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class AnimalsList extends Component {\n  render() {\n    const { animals } = this.props.animals; // Array of animals\n\n    return (\n      <ul>\n        {animals.map(animal => (\n          <Animal name={animal} key={animals.key} />\n        ))}\n      </ul>\n    );\n  }\n}\n")),(0,r.kt)("h3",{id:"create-an-element-without-using-jsx"},"Create an element without using JSX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'React.createElement("div", { className: "maindiv" });\n')),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);