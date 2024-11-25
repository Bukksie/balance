"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[894],{76042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/01/09/bringing-balance-to-your-data","metadata":{"permalink":"/blog/2023/01/09/bringing-balance-to-your-data","source":"@site/blog/2023/01/09/bringing-balance-to-your-data.md","title":"Bringing \\"balance\\" to your data","description":"In research and data science, we sometimes encounter biased data: that is, data that has not been sampled completely randomly and suffers from an over- or under-indexing toward the population of interest. Survey data is an example in this regard. Surveys play an important role in providing measurements on subjective user experience indicators, such as sentiment and opinions, which cannot be measured by other means. But because survey data is collected from a self-selected group of participants, it needs to be analyzed carefully.","date":"2023-01-09T00:00:00.000Z","formattedDate":"January 9, 2023","tags":[],"readingTime":4.3,"hasTruncateMarker":true,"authors":[{"name":"Roee Eilat","title":"Research Scientist Manager @ Meta","url":"https://research.facebook.com/people/eilat-roee/"}],"frontMatter":{"title":"Bringing \\"balance\\" to your data","authors":[{"name":"Roee Eilat","title":"Research Scientist Manager @ Meta","url":"https://research.facebook.com/people/eilat-roee/"}],"tags":[],"hide_table_of_contents":true}},"content":"In research and data science, we sometimes encounter biased data: that is, data that has not been sampled completely randomly and suffers from an over- or under-indexing toward the population of interest. Survey data is an example in this regard. Surveys play an important role in providing measurements on subjective user experience indicators, such as sentiment and opinions, which cannot be measured by other means. But because survey data is collected from a self-selected group of participants, it needs to be analyzed carefully.\\n\\n\x3c!--truncate--\x3e\\n\\nBias in survey data is often the result of survey non-response or when the data collection suffers from [sampling bias](https://en.wikipedia.org/wiki/Sampling_bias). A similar issue arises in[ observational studies](https://en.wikipedia.org/wiki/Observational_study) when comparing treatment groups, and in any data that suffers from [selection bias](https://en.wikipedia.org/wiki/Selection_bias). Directly inferring insights from data with such biases or training ML models on such data can result in erroneous estimates or underperforming models. Hence, it is important for practitioners to understand if and how data is biased and, when possible, use statistical methods to minimize such biases.\\n\\nFor example, say we invite a random set of adults from a population of interest to participate in a survey we are running to estimate the sentiment towards some brand. If, for example, younger people have a higher propensity to participate in our survey, the proportion of younger people from the survey respondents will be higher than their proportion in the population. If younger people also have stronger affiliation with the brand, a simple average of the survey responses will be a biased estimate of the average sentiment in the population.\\n\\n\\nThe field of [survey statistics](https://en.wikipedia.org/wiki/Survey_methodology) offers methods for mitigating bias in samples, at least partially, by relying on auxiliary information (a.k.a., \u201ccovariates\u201d or \u201cfeatures\u201d). When such information is available for all items in the sample as well as for the population from which it was sampled, it can be used to create weights. Applying the weights to the data allows us to produce less biased estimates or models. In the example above, we may wish to adjust for non-response using not only age but other demographic information such as gender, education, etc. This can be done by weighting the sample to the population using the auxiliary information.\\n\\nThe figure below shows a sample (red) vs. population (blue) distribution representing the age bias described in the brand sentiment estimation example above. This figure was produced on simulated data which we set to be biased on other variables such as gender, education as well.\\n\\n![sample_vs_target_bar_chart](./sample_vs_target_bar_chart.webp)\\n\\nWhen weights are calculated and applied the weighted sample distribution (green) becomes much closer to the population distribution, and the weighted average will also be less biased to the extent the response is correlated with respondent\u2019s age. Notice the weighted distribution is not fully corrected, mainly because of bias-variance considerations.\\n\\n##  balance: a Python package for adjusting biased samples\\n\\nWith survey data playing a key role in research and product work at Meta, we observed a growing need for software tools that make survey statistics methods accessible for researchers and engineers. This has led us to develop \u201c_balance\u201d_: A Python package for adjusting biased data samples. In _balance_ we introduce a simple easy-to-use framework for weighting data and evaluating its biases with and without adjustments. The package is designed to provide best practices for weights fitting and offers several modeling approaches. The methodology in \u201cbalance\u201d already  supports ongoing automated survey data processing at Meta, as well as ad-hoc analyses of survey data by dozens of researchers every month.\\n\\nThe main workflow API of _balance_ includes three steps: (1) **understanding** the initial bias in the data relative to a target we would like to infer, (2) **adjusting** the data to correct for the bias by producing weights for each unit in the sample based on propensity scores, and (3) **evaluating** the final bias and the variance inflation after applying the fitted weights. The adjustment step provides several alternatives for the researcher to choose from. Current options include: Inverse propensity weighting of the form of logistic regression model based on LASSO (Least Absolute Shrinkage and Selection Operator [1]), Covariate Balancing Propensity Scores [2], and post-stratification. The focus is on providing a simple to use API, based on Pandas DataFrame structure, that can be used by researchers from a wide spectrum of fields.\\n\\n**We\u2019re releasing \u201c_balance_\u201d as a Meta Open Source project.** We want researchers, data scientists, engineers, and other practitioners to be able to apply these practices when they work in Python, benefiting from Meta\u2019s long research and experience in the field. With relation to \u201c_balance_\u201d we hope to also create an active community of data science practitioners where people can come together to discuss methodology and build tools that benefit survey-based research across academia and industry. If you work in Python with potentially biased data, we encourage you to use \u201cbalance\u201d in your project.\\n\\n\u201c_balance_\u201c website: [https://import-balance.org/](https://import-balance.org/)\\n\\ngithub repository: [https://github.com/facebookresearch/balance](https://github.com/facebookresearch/balance)\\n\\n**References**\\n\\n[1] Tibshirani, R. (1996). Regression shrinkage and selection via the lasso. Journal of the Royal Statistical Society: Series B (Methodological), 58(1), 267-288.\\n\\n[2] Imai, K., & Ratkovic, M. (2014). Covariate balancing propensity score. Journal of the Royal Statistical Society: Series B (Statistical Methodology), 76(1), 243-263."}]}')}}]);