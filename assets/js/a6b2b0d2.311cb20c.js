"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[726],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){return function(t){var a=d(t.components);return n.createElement(e,o({},t,{components:a}))}},d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},10287:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(9668),r=a(21367),o=(a(96540),a(15680)),i=["components"],s={title:'Bringing "balance" to your data',authors:[{name:"Roee Eilat",title:"Research Scientist Manager @ Meta",url:"https://research.facebook.com/people/eilat-roee/"}],tags:[],hide_table_of_contents:!0},l=void 0,p={permalink:"/blog/2023/01/09/bringing-balance-to-your-data",source:"@site/blog/2023/01/09/bringing-balance-to-your-data.md",title:'Bringing "balance" to your data',description:"In research and data science, we sometimes encounter biased data: that is, data that has not been sampled completely randomly and suffers from an over- or under-indexing toward the population of interest. Survey data is an example in this regard. Surveys play an important role in providing measurements on subjective user experience indicators, such as sentiment and opinions, which cannot be measured by other means. But because survey data is collected from a self-selected group of participants, it needs to be analyzed carefully.",date:"2023-01-09T00:00:00.000Z",formattedDate:"January 9, 2023",tags:[],readingTime:4.3,hasTruncateMarker:!0,authors:[{name:"Roee Eilat",title:"Research Scientist Manager @ Meta",url:"https://research.facebook.com/people/eilat-roee/"}],frontMatter:{title:'Bringing "balance" to your data',authors:[{name:"Roee Eilat",title:"Research Scientist Manager @ Meta",url:"https://research.facebook.com/people/eilat-roee/"}],tags:[],hide_table_of_contents:!0}},c={authorsImageUrls:[void 0]},d=[{value:"balance: a Python package for adjusting biased samples",id:"balance-a-python-package-for-adjusting-biased-samples",level:2}],u={toc:d};function m(e){var t=e.components,s=(0,r.A)(e,i);return(0,o.mdx)("wrapper",(0,n.A)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"In research and data science, we sometimes encounter biased data: that is, data that has not been sampled completely randomly and suffers from an over- or under-indexing toward the population of interest. Survey data is an example in this regard. Surveys play an important role in providing measurements on subjective user experience indicators, such as sentiment and opinions, which cannot be measured by other means. But because survey data is collected from a self-selected group of participants, it needs to be analyzed carefully."),(0,o.mdx)("p",null,"Bias in survey data is often the result of survey non-response or when the data collection suffers from ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sampling_bias"},"sampling bias"),". A similar issue arises in",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Observational_study"}," observational studies")," when comparing treatment groups, and in any data that suffers from ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Selection_bias"},"selection bias"),". Directly inferring insights from data with such biases or training ML models on such data can result in erroneous estimates or underperforming models. Hence, it is important for practitioners to understand if and how data is biased and, when possible, use statistical methods to minimize such biases."),(0,o.mdx)("p",null,"For example, say we invite a random set of adults from a population of interest to participate in a survey we are running to estimate the sentiment towards some brand. If, for example, younger people have a higher propensity to participate in our survey, the proportion of younger people from the survey respondents will be higher than their proportion in the population. If younger people also have stronger affiliation with the brand, a simple average of the survey responses will be a biased estimate of the average sentiment in the population."),(0,o.mdx)("p",null,"The field of ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Survey_methodology"},"survey statistics")," offers methods for mitigating bias in samples, at least partially, by relying on auxiliary information (a.k.a., \u201ccovariates\u201d or \u201cfeatures\u201d). When such information is available for all items in the sample as well as for the population from which it was sampled, it can be used to create weights. Applying the weights to the data allows us to produce less biased estimates or models. In the example above, we may wish to adjust for non-response using not only age but other demographic information such as gender, education, etc. This can be done by weighting the sample to the population using the auxiliary information."),(0,o.mdx)("p",null,"The figure below shows a sample (red) vs. population (blue) distribution representing the age bias described in the brand sentiment estimation example above. This figure was produced on simulated data which we set to be biased on other variables such as gender, education as well."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"sample_vs_target_bar_chart",src:a(50585).A,width:"1729",height:"848"})),(0,o.mdx)("p",null,"When weights are calculated and applied the weighted sample distribution (green) becomes much closer to the population distribution, and the weighted average will also be less biased to the extent the response is correlated with respondent\u2019s age. Notice the weighted distribution is not fully corrected, mainly because of bias-variance considerations."),(0,o.mdx)("h2",{id:"balance-a-python-package-for-adjusting-biased-samples"},"balance: a Python package for adjusting biased samples"),(0,o.mdx)("p",null,"With survey data playing a key role in research and product work at Meta, we observed a growing need for software tools that make survey statistics methods accessible for researchers and engineers. This has led us to develop \u201c",(0,o.mdx)("em",{parentName:"p"},"balance\u201d"),": A Python package for adjusting biased data samples. In ",(0,o.mdx)("em",{parentName:"p"},"balance")," we introduce a simple easy-to-use framework for weighting data and evaluating its biases with and without adjustments. The package is designed to provide best practices for weights fitting and offers several modeling approaches. The methodology in \u201cbalance\u201d already  supports ongoing automated survey data processing at Meta, as well as ad-hoc analyses of survey data by dozens of researchers every month."),(0,o.mdx)("p",null,"The main workflow API of ",(0,o.mdx)("em",{parentName:"p"},"balance")," includes three steps: (1) ",(0,o.mdx)("strong",{parentName:"p"},"understanding")," the initial bias in the data relative to a target we would like to infer, (2) ",(0,o.mdx)("strong",{parentName:"p"},"adjusting")," the data to correct for the bias by producing weights for each unit in the sample based on propensity scores, and (3) ",(0,o.mdx)("strong",{parentName:"p"},"evaluating")," the final bias and the variance inflation after applying the fitted weights. The adjustment step provides several alternatives for the researcher to choose from. Current options include: Inverse propensity weighting of the form of logistic regression model based on LASSO (Least Absolute Shrinkage and Selection Operator ","[1]","), Covariate Balancing Propensity Scores ","[2]",", and post-stratification. The focus is on providing a simple to use API, based on Pandas DataFrame structure, that can be used by researchers from a wide spectrum of fields."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"We\u2019re releasing \u201c",(0,o.mdx)("em",{parentName:"strong"},"balance"),"\u201d as a Meta Open Source project.")," We want researchers, data scientists, engineers, and other practitioners to be able to apply these practices when they work in Python, benefiting from Meta\u2019s long research and experience in the field. With relation to \u201c",(0,o.mdx)("em",{parentName:"p"},"balance"),"\u201d we hope to also create an active community of data science practitioners where people can come together to discuss methodology and build tools that benefit survey-based research across academia and industry. If you work in Python with potentially biased data, we encourage you to use \u201cbalance\u201d in your project."),(0,o.mdx)("p",null,"\u201c",(0,o.mdx)("em",{parentName:"p"},"balance"),"\u201c website: ",(0,o.mdx)("a",{parentName:"p",href:"https://import-balance.org/"},"https://import-balance.org/")),(0,o.mdx)("p",null,"github repository: ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/balance"},"https://github.com/facebookresearch/balance")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"References")),(0,o.mdx)("p",null,"[1]"," Tibshirani, R. (1996). Regression shrinkage and selection via the lasso. Journal of the Royal Statistical Society: Series B (Methodological), 58(1), 267-288."),(0,o.mdx)("p",null,"[2]"," Imai, K., & Ratkovic, M. (2014). Covariate balancing propensity score. Journal of the Royal Statistical Society: Series B (Statistical Methodology), 76(1), 243-263."))}m.isMDXComponent=!0},50585:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/sample_vs_target_bar_chart-832e710b3029fc9bda5c251d21b12d03.webp"}}]);