"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[688],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return p}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=n.createContext({}),p=function(e){return function(a){var t=d(a.components);return n.createElement(e,o({},a,{components:t}))}},d=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(m.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(t),c=i,h=p["".concat(r,".").concat(c)]||p[c]||u[c]||o;return t?n.createElement(h,s(s({ref:a},m),{},{components:t})):n.createElement(h,s({ref:a},m))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},12255:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var n=t(83117),i=t(80102),o=(t(67294),t(3905)),r=["components"],s={id:"getting-started",title:"Getting Started",sidebar_position:1},l=void 0,m={unversionedId:"docs/getting-started",id:"docs/getting-started",title:"Getting Started",description:"What is balance?",source:"@site/docs/docs/getting-started.md",sourceDirName:"docs",slug:"/docs/getting-started",permalink:"/docs/docs/getting-started",draft:!1,editUrl:"https://github.com/facebookresearch/balance/website/docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"getting-started",title:"Getting Started",sidebar_position:1},sidebar:"docsSidebar",next:{title:"General Framework",permalink:"/docs/docs/general_framework/"}},p={},d=[{value:"What is <em>balance</em>?",id:"what-is-balance",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installing balance",id:"installing-balance",level:2},{value:"Installing via PyPi",id:"installing-via-pypi",level:3},{value:"Installing from Source/Git",id:"installing-from-sourcegit",level:3},{value:"balance\u2019s workflow in high-level",id:"balances-workflow-in-high-level",level:2},{value:"Code example of using balance",id:"code-example-of-using-balance",level:2},{value:"Implemented methods for adjustments",id:"implemented-methods-for-adjustments",level:2},{value:"Implemented methods for diagnostics/evaluation",id:"implemented-methods-for-diagnosticsevaluation",level:2},{value:"Getting help, submitting bug reports and contributing code",id:"getting-help-submitting-bug-reports-and-contributing-code",level:2},{value:"Citing <em>balance</em>",id:"citing-balance",level:2},{value:"License",id:"license",level:2},{value:"Acknowledgements / People",id:"acknowledgements--people",level:2}],c={toc:d};function u(e){var a=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"what-is-balance"},"What is ",(0,o.mdx)("em",{parentName:"h2"},"balance"),"?"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("em",{parentName:"strong"},"balance")," is a Python package")," offering a simple workflow and methods for ",(0,o.mdx)("strong",{parentName:"p"},"dealing with biased data samples")," when looking to infer from them to some population of interest."),(0,o.mdx)("p",null,"Biased samples often occur in ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Survey_methodology"},"survey statistics")," when respondents present ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sampling_bias"},"non-response bias or survey suffers from sampling bias")," (that are not ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Missing_data#Missing_completely_at_random"},"missing completely at random"),"). A similar issue arises in ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Observational_study"},"observational studies")," when comparing the treated vs untreated groups, and in any data that suffers from selection bias."),(0,o.mdx)("p",null,"Under the missing at random assumption (",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Missing_data#Missing_at_random"},"MAR"),"), bias in samples could sometimes be (at least partially) mitigated by relying on auxiliary information (a.k.a.: \u201ccovariates\u201d or \u201cfeatures\u201d) that is present for all items in the sample, as well as present in a sample of items from the population. For example, if we want to infer from a sample of respondents to some survey, we may wish to adjust for non-response using demographic information such as age, gender, education, etc. This can be done by weighing the sample to the population using auxiliary information."),(0,o.mdx)("p",null,"The package is intended for researchers who are interested in balancing biased samples, such as the ones coming from surveys, using a Python package. This need may arise by survey methodologists, demographers, UX researchers, market researchers, and generally data scientists, statisticiains, and machine learners."),(0,o.mdx)("h1",{id:"installation"},"Installation"),(0,o.mdx)("h2",{id:"requirements"},"Requirements"),(0,o.mdx)("p",null,"You need Python 3.8 or later to run balance. balance can be built and run\nfrom OSX, Linux, and Windows"),(0,o.mdx)("p",null,"The required Python dependencies are:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'REQUIRES = [\n    "numpy",\n    "pandas<=1.4.3",\n    "ipython",\n    "scipy<=1.8.1",\n    "patsy",\n    "seaborn<=0.11.1",\n    "plotly",\n    "matplotlib",\n    "statsmodels",\n    "scikit-learn",\n    "ipfn",\n]\n')),(0,o.mdx)("p",null,"Note that glmnet_python must be installed from the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/bbalasub1/glmnet_python.git@1.0"},"Github source")),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/balance/blob/main/setup.py"},"setup.py")," for more details. ",(0,o.mdx)("strong",{parentName:"p"},"TODO"),": add details on using setup.py."),(0,o.mdx)("h2",{id:"installing-balance"},"Installing balance"),(0,o.mdx)("p",null,"As a prerequisite, you must install glmnet_python from source:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"python -m pip install git+https://github.com/bbalasub1/glmnet_python.git@1.0\n")),(0,o.mdx)("h3",{id:"installing-via-pypi"},"Installing via PyPi"),(0,o.mdx)("p",null,"We recommend installing balance from PyPi via pip for the latest stable version:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"python -m pip install balance\n")),(0,o.mdx)("p",null,"Installation will use Python wheels from PyPI, available for ",(0,o.mdx)("a",{parentName:"p",href:"https://pypi.org/project/balance/#files"},"OSX, Linux, and Windows"),"."),(0,o.mdx)("h3",{id:"installing-from-sourcegit"},"Installing from Source/Git"),(0,o.mdx)("p",null,"You can install the latest (bleeding edge) version from Git:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"python -m pip install git+https://github.com/facebookresearch/balance.git\n")),(0,o.mdx)("p",null,"Alternatively, if you have a local clone of the repo:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"cd balance\npython -m pip install .\n")),(0,o.mdx)("h1",{id:"getting-started"},"Getting started"),(0,o.mdx)("h2",{id:"balances-workflow-in-high-level"},"balance\u2019s workflow in high-level"),(0,o.mdx)("p",null,"The core workflow in balance deals with fitting and evaluating weights to a sample. For each unit in the sample (such as a respondent to a survey), balance fits a weight that can be (loosely) interpreted as the number of people from the target population that this respondent represents. This aims to help mitigate the coverage and non-response biases, as illustrated in the following figure."),(0,o.mdx)("p",null,(0,o.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/facebookresearch/balance/main/website/docs/docs/img/total_survey_error_image.png?token=GHSAT0AAAAAAB25KSTWSBZGTWAJ7LJ3U3G6Y3VG4XA",alt:"total_survey_error_img"})),(0,o.mdx)("p",null,"The weighting of survey data through balance is done in the following main steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Loading data of the respondents of the survey."),(0,o.mdx)("li",{parentName:"ol"},"Loading data about the target population we would like to correct for."),(0,o.mdx)("li",{parentName:"ol"},"Diagnostics of the sample covariates so to evaluate whether weighting is needed."),(0,o.mdx)("li",{parentName:"ol"},"Adjusting the sample to the target."),(0,o.mdx)("li",{parentName:"ol"},"Evaluation of the results."),(0,o.mdx)("li",{parentName:"ol"},"Use the weights for producing population level estimations."),(0,o.mdx)("li",{parentName:"ol"},"Saving the output weights.")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"TODO"),": add a simple chart that describes the flow"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"TODO"),": link to the quick start tutorial"),(0,o.mdx)("h2",{id:"code-example-of-using-balance"},"Code example of using balance"),(0,o.mdx)("p",null,"You may run the following code to play with balance's basic workflow:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'from balance import load_data, Sample\n\n# load simulated example data\ntarget_df, sample_df = load_data()\n\n# Import dample and target data into a Sample object\nsample = Sample.from_frame(sample_df, outcome_columns=["happiness"])\ntarget = Sample.from_frame(target_df)\n\n# Set the target to be the target of sample\nsample_with_target = sample.set_target(target)\n\n# Check basic diagnostics of sample vs target before adjusting:\nsample_with_target.covars().mean().T\nsample_with_target.covars().asmd().T\nsample_with_target.covars().plot()\n\n# Using ipw to fit survey weights\nadjust = sample_with_target.adjust(max_de=None)\n\nprint(adjust.summary())\n# Covar ASMD reduction: 62.3%, design effect: 2.249\n# Covar ASMD (7 variables):0.335 -> 0.126\n# Model performance: Model proportion deviance explained: 0.174\n\n\n# A detailed diagnostics is available for after the adjustment\n\n# For covars:\nadjust.covars().covars().mean().T\nadjust.covars().asmd().T\nadjust.covars().plot()  # interactive plots\nadjust.covars().plot(library = "seaborn", dist_type = "kde")  # static plots\n\n# For weights:\nadjust.weights().plot()\nadjust.weights().design_effect()\n\n# For the outcome:\nprint(adjust.outcomes().summary())\n# 1 outcomes: [\'happiness\']\n# Mean outcomes:\n#             happiness\n# source\n# self        54.221388\n# unadjusted  48.392784\n#\n# Response rates (relative to number of respondents in sample):\n#    happiness\n# n     1000.0\n# %      100.0\nadjust.outcomes().plot()\n\n# Finally, the adjusted data can be downloded using:\nadjust.to_download()\nadjust.to_csv()\n')),(0,o.mdx)("p",null,"To see the full output of the code above, please go over to ",(0,o.mdx)("strong",{parentName:"p"},"TODO"),": add link."),(0,o.mdx)("h2",{id:"implemented-methods-for-adjustments"},"Implemented methods for adjustments"),(0,o.mdx)("p",null,"balance currently implements various adjustment methods."),(0,o.mdx)("p",null,"For weight adjustment, it uses ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inverse_probability_weighting"},"inverse probability/propensity weighting")," (IPW) with:"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"TODO"),": link to the website links instead of the ones we have below.\n",(0,o.mdx)("strong",{parentName:"p"},"TODO:")," Update descriptions according the adjustment page"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Logistic regression using L1 (LASSO) penalization."),(0,o.mdx)("li",{parentName:"ol"},"Covariate Balancing Propensity Score (CBPS)."),(0,o.mdx)("li",{parentName:"ol"},"Post-stratification.")),(0,o.mdx)("h2",{id:"implemented-methods-for-diagnosticsevaluation"},"Implemented methods for diagnostics/evaluation"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"TODO"),": link to the website links instead of the ones we have below.\nFor diagnostics the main tools (comparing before, after applying weights, and the target population) are:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Plots",(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"barplots"),(0,o.mdx)("li",{parentName:"ol"},"density plots (for weights and covariances)"),(0,o.mdx)("li",{parentName:"ol"},"qq-plots"))),(0,o.mdx)("li",{parentName:"ol"},"Statistical summaries",(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"Weights distributions",(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Design_effect#Haphazard_weights_with_estimated_ratio-mean_(%7F'%22%60UNIQ--postMath-0000003A-QINU%60%22'%7F)_-_Kish's_design_effect"},"Kish\u2019s design effect")),(0,o.mdx)("li",{parentName:"ol"},"Main summaries (mean, median, variances, quantiles)"))),(0,o.mdx)("li",{parentName:"ol"},"Covariate distributions",(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"Absolute Standardized Mean Difference (ASMD). For continuous variables, it is ",(0,o.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Effect_size#Cohen's_d"},"Cohen's d"),". Categorical variables are one-hot encoded, Cohen's d is calculated for each category and ASMD for a categorical variable is defined as Cohen's d, average across all categories.")))))),(0,o.mdx)("h1",{id:"more-details"},"More details"),(0,o.mdx)("h2",{id:"getting-help-submitting-bug-reports-and-contributing-code"},"Getting help, submitting bug reports and contributing code"),(0,o.mdx)("p",null,"You are welcome to:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Ask for help in: ",(0,o.mdx)("a",{parentName:"li",href:"https://stats.stackexchange.com/questions/tagged/balance"},"https://stats.stackexchange.com/questions/tagged/balance")),(0,o.mdx)("li",{parentName:"ul"},"Submit bug-reports and features' suggestions at: ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/balance/issues"},"https://github.com/facebookresearch/balance/issues")),(0,o.mdx)("li",{parentName:"ul"},"Send a pull request on: ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/balance"},"https://github.com/facebookresearch/balance"),". See the ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/balance/blob/main/CONTRIBUTING.md"},"CONTRIBUTING")," file for how to help out. And our ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/balance/blob/main/LICENSE-DOCUMENTATION"},"CODE OF CONDUCT")," for our expectations from contributors.")),(0,o.mdx)("h2",{id:"citing-balance"},"Citing ",(0,o.mdx)("em",{parentName:"h2"},"balance")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"TODO"),": Update."),(0,o.mdx)("h2",{id:"license"},"License"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("em",{parentName:"p"},"balance")," package is licensed under the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/balance/blob/main/LICENSE"},"GPLv2 license"),", and all the documentation on the site is under ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/balance/blob/main/LICENSE-DOCUMENTATION"},"CC-BY"),"."),(0,o.mdx)("h1",{id:"news"},"News"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"TODO"),": Link to the NEWS.md file"),(0,o.mdx)("h2",{id:"acknowledgements--people"},"Acknowledgements / People"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("em",{parentName:"p"},"balance")," package is actively maintained by people from the ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/teams/core-data-science/"},"Core Data Science")," team (in Tel Aviv and Boston), by ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/sarig-tal/"},"Tal Sarig"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/galili-tal/"},"Tal Galili")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/mandala-steve/"},"Steve Mandala"),"."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("em",{parentName:"p"},"balance")," package was (and is) developed by many people, including: Adam Obeng, Kevin Liou, Sean Taylor, ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/haimovich-daniel/"},"Daniel Haimovich"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://lukesonnet.com/"},"Luke Sonnet"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/sarig-tal/"},"Tal Sarig"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/galili-tal/"},"Tal Galili"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/eilat-roee/"},"Roee Eilat"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://www.linkedin.com/in/barak-yair-reif-2154365/?originalSubdomain=il"},"Barak Yair Reif"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/mandala-steve/"},"Steve Mandala"),". and others."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("em",{parentName:"p"},"balance")," package was open-sourced by ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/sarig-tal/"},"Tal Sarig"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/galili-tal/"},"Tal Galili")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://research.facebook.com/people/mandala-steve/"},"Steve Mandala")," in late 2022."))}u.isMDXComponent=!0}}]);