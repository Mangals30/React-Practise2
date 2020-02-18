import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import dateToday from './date'
import './App.css';

const App = () => {
 const title = 'My Experience as of' 
 const titleYear = new Date().getFullYear()
 const subTitle = 'Professional Summary'
 const dateTitle = dateToday()
 const companies = ['Infosys Technologies Ltd.','NTT Data','Aris Global','Cryptograph Technologies','Integrify Study Academy']
const companySet = companies.map(company => <div class = "company">{company.toUpperCase()}</div>)
  return (
  <div class = "wrapper">
    <Header
      title = {title.toUpperCase()}
      titleYear = {titleYear}
      subTitle = {subTitle}
      dateTitle = {dateTitle}
    />
    <Main
      companySet = {companySet}
    />
  </div>)
}

export default App;
