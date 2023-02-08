import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Faculty = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faculty List</title>
        <meta
          name="description"
          content="Faculty List"
        />

        <link rel="canonical" href="http://islec.edu.in" />
      </Helmet>

      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Faculty</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <Link href="#home" as={Link} to="/">
                        <i className="fa fa-home" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <a className="active" href="#/">
                      Faculty
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div className="d-flex flex-wrap">
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_content media-body">
                    <h6 className="title">K.Nanchari </h6>
                      <p>Head of Department</p>
                    </div>
                  </div>
                  <div className="breadcrumb_media d-flex align-items-center mt-30">
                    <div className="media_image">
                      <img
                        className="bookmark"
                        src="https://i.ibb.co/z7NLwF0/mail.png"
                        alt="mail"
                      />
                    </div>
                    <div className="media_content media-body mt-2">
                      <h6 className="title">
                        <a href="mailto:ce.hod@islec.edu.in">
                          ce.hod@islec.edu.in
                        </a>{' '}
                      </h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="course-details-area dept pt-60 pb-60">
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <section className="dept-tabs mt-2">
                <Tabs className="dept-tab">
                  <TabList>
                    <Tab>Teaching List</Tab>
                    <Tab>Non-Teaching List</Tab>
    
                  </TabList>

                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5">

                      <h4>Teaching List</h4>
                        <Table striped bordered hover>

    <tr>
        <th>S.No</th>
        <th>NAME</th>
        <th>DEPT</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Dr MOHAMMED ABDUL BARI</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>2</td>
        <td>THOKALA ANITHA</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>3</td>
        <td>DR PATHAN AHMED KHAN</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>4</td>
        <td>KAKULLA PRAJWALA</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>5</td>
        <td>SHAISTA FARHEEN</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>6</td>
        <td>MOHD DASTAGIR</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>7</td>
        <td>ASMA AKBAR</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>8</td>
        <td>GOUSIA TABASSUM</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>9</td>
        <td>REHANA FATIMA</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>10</td>
        <td>UMME RUMA</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>11</td>
        <td>NEHA NAZNEIN</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>12</td>
        <td>DACHEPALLY MADURI</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>13</td>
        <td>MIRZA MUDASSIR ALI BAIG</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>14</td>
        <td>SYED AKMAL HUSSAIN JUNAIDI</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Dr MOHAMMED MASOOD</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>16</td>
        <td>MOHAMMED ATTALIQUE RABBANI</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>17</td>
        <td>MOHD JAMEEL</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>18</td>
        <td>MIDTURE ABDUL SALMAN KHAN</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>19</td>
        <td>MD BAHAUDDIN</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>20</td>
        <td>HADIYA SAMEEN</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>21</td>
        <td>TOUSEEQ ANWAR WASIF</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>22</td>
        <td>IRFAN AHMED</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>23</td>
        <td>MIR FIRASATH ALI</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>24</td>
        <td>AHMED ABDUL AHAD</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>25</td>
        <td>KOKKONDA SRICHARAN</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>26</td>
        <td>KANCHALA NANCHARI</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>27</td>
        <td>SHAIK RIYAZ UDDIN</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>28</td>
        <td>MOHD NAZEER</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>29</td>
        <td>MIR FAROOQ ALI</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>30</td>
        <td>RAMYAKALA SABBINENI</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>31</td>
        <td>SHAIK FAREED AHMED</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>32</td>
        <td>ASRA SULTANA</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>33</td>
        <td>S MOHAMMED MAZHAR UL HAQ</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>34</td>
        <td>AQSA FATIMA</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>35</td>
        <td>Dr SOHEL AHMED</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>36</td>
        <td>Dr MD IBRAHEEM ALTAF</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>37</td>
        <td>MOHAMMED VAZEER KHAN</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>38</td>
        <td>AFEEFA SIDDIQUA</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>39</td>
        <td>SYED MUJEEBUL HASSAN</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>40</td>
        <td>AHMED ABDUL MATEEN</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>41</td>
        <td>SHAIK VASEEM UDDIN</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>42</td>
        <td>MOHAMMED JAMEEL HASHMI</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>43</td>
        <td>AHMED ABDUL RAHMAN</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>44</td>
        <td>Dr ZAREENA SULTANA</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>45</td>
        <td>ABDUL BARI</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>46</td>
        <td>HAMEEDA BEGUM</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>47</td>
        <td>MIRDHATI RAMYASREE</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>48</td>
        <td>MOHAMMED RIYAZ QURESHI</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>49</td>
        <td>MOHAMMED JAYEED</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>50</td>
        <td>SYED SULTAN MAHMOOD</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>51</td>
        <td>ZUBEDA BEGUM</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>52</td>
        <td>KALVALA SRIKANTH</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>53</td>
        <td>JUVERIA GHORI</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>54</td>
        <td>SURYA MUKHI</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>55</td>
        <td>AHSAN JAMIL</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>56</td>
        <td>RAFATH FARHA</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>57</td>
        <td>MAHREEN AYESHA NAAZ</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>58</td>
        <td>PARIKI SHUBHAKAR</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>59</td>
        <td>AFSHAN BEGUM</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>60</td>
        <td>ASJAD MOHI UDDIN</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>61</td>
        <td>RIYAZ KHAN</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>62</td>
        <td>SYEDA JABEEN</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>63</td>
        <td>SYED SHAJIH UDDIN AHMED</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>64</td>
        <td>MULIKI MANASA</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>65</td>
        <td>AYESHA SIDDIQUA</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>66</td>
        <td>MOHD AHMED</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>67</td>
        <td>MOHAMMED BEGUM</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>68</td>
        <td>FAROOQ MOHAMMED</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>69</td>
        <td>SYED MOHAMMED</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>70</td>
        <td>SYED UDDIN</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>71</td>
        <td>MOHAMMED MOHIUDDIN</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>72</td>
        <td>KRISHNA PUNNA</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>73</td>
        <td>SHAIK ABDUL SALEEM</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>74</td>
        <td>MOHAMMED RAHMAT ALI</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>75</td>
        <td>SAMDANI NOOR MOHD</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>76</td>
        <td>MATHEEN SULTANA</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>77</td>
        <td>SHAHEEN FATIMA</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>78</td>
        <td>S SUNAINA</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>79</td>
        <td>MOHMMAD JALEEL AHMED</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>80</td>
        <td>SRIKANTH REDDY</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>81</td>
        <td>MOHAMMED AHMED</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>82</td>
        <td>RAGHAVENDER AVANGAPURAM</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>83</td>
        <td>MOHD MUKARRAM UDDIN</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>84</td>
        <td>Dr BATTULA SRINIVASULU</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>85</td>
        <td>Dr TUDI PREM CHANDER</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>86</td>
        <td>MOHAMMED  BARI</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>87</td>
        <td>MOHAMMED UDDIN</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>88</td>
        <td>TORLIKONDA  RAMALINGESWARA RAO</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>89</td>
        <td>MOHD FURKHAN</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>90</td>
        <td>SYED SHOEB</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>91</td>
        <td>ABDUL REHMAN</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>92</td>
        <td>DR SYED ASADULLAH HUSSAINI</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>93</td>
        <td>SK KHADAR BASHA</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>94</td>
        <td>N SARASWATHI</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>95</td>
        <td>MIRZA YOUNUS ALI</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>96</td>
        <td>JAMAL ARJUMAND</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>97</td>
        <td>SABA SHEIBA</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>98</td>
        <td>JYOTHSNA SABBJ</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>99</td>
        <td>ANJANEYULU GIRI</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>100</td>
        <td>k suresh</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>101</td>
        <td>MOHAMMED AZAM</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>102</td>
        <td>SYED ZAFFAR MAHMOOD</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>103</td>
        <td>DR CHANDRA SHEKAR</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>104</td>
        <td>DR ZEESHAN WAKIL</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>105</td>
        <td>IMREENA ALI</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>106</td>
        <td>AKBAR ALI</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>107</td>
        <td>MOHAMMED PARVEZ</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>108</td>
        <td>MOHD ISMAIL</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>109</td>
        <td>MOHD AMER</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>110</td>
        <td>NAYANI VENKATA SAI PRASAD</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>111</td>
        <td>ARJUMAND SIDDIQUI</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>112</td>
        <td>VENKAT VORUGANTI</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>113</td>
        <td>SYEDA SULTANA</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>114</td>
        <td>HAMEED BEGUM</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>115</td>
        <td>MOHD MUSHTAQ</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>116</td>
        <td>ASMA KHATOON</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>117</td>
        <td>AZAM KHAN MAHAMMAD</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>118</td>
        <td>RAFEEQ BEGUM</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>119</td>
        <td>MOHD IRFAN UDDIN</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>120</td>
        <td>KUBRA FATIMA</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>121</td>
        <td>SHAZIA FARHA</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>122</td>
        <td>SARA TABASSUM</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>123</td>
        <td>SALMAN AHMED</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>124</td>
        <td>TAHSEEN UNNISA</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>125</td>
        <td>SYEDA IKRAMA</td>
        <td>MBA</td>
    </tr>

                        </Table>

                    </div>
                  </TabPanel>
                  
                  <TabPanel className="tab-content tab-content-info text-justify">
                    <div className="mt-5 capital" >

                      <h4>Non-Teaching List</h4>

                        <p>The Non Teaching List includes; Laboratory Technicians, Laboratory Assistants, Office Assistants, Drivers, Watchmans, Sweepers (Ayas), Admin Staff.</p>

                        <Table striped bordered hover>

                        <tr>
        <td>S.NO</td>
        <td>NAME</td>
    </tr>
    <tr>
        <td>1</td>
        <td>ZAHEER AHMED</td>
    </tr>
    <tr>
        <td>2</td>
        <td>G. ASHOK KUMAR</td>
    </tr>
    <tr>
        <td>3</td>
        <td>ARSHIYA TABASSUM</td>
    </tr>
    <tr>
        <td>4</td>
        <td>MOHD ABDUL AFNAN</td>
    </tr>
    <tr>
        <td>5</td>
        <td>K. VEERANJANEYULU</td>
    </tr>
    <tr>
        <td>6</td>
        <td>P. SRINIVAS</td>
    </tr>
    <tr>
        <td>7</td>
        <td>ASIF KHAN</td>
    </tr>
    <tr>
        <td>8</td>
        <td>PAVAN K.</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MOHAMMED TOUSEF HUSSAIN</td>
    </tr>
    <tr>
        <td>10</td>
        <td>MD. SUJAD UDDIN</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MD ABDUL FAREED</td>
    </tr>
    <tr>
        <td>12</td>
        <td>MOHAMMED SOHAIL</td>
    </tr>
    <tr>
        <td>13</td>
        <td>SHABUDDIN NOORUDDIN</td>
    </tr>
    <tr>
        <td>14</td>
        <td>THOKALA LAXMA REDDY</td>
    </tr>
    <tr>
        <td>15</td>
        <td>MANZOOR MOHIUDDIN</td>
    </tr>
    <tr>
        <td>16</td>
        <td>KHAJA MUSTAFA ALI</td>
    </tr>
    <tr>
        <td>17</td>
        <td>MUNEERUNNISA BEGUM</td>
    </tr>
    <tr>
        <td>18</td>
        <td>FAZAL AHMED</td>
    </tr>
    <tr>
        <td>19</td>
        <td>SYED ETEMAD UDDIN</td>
    </tr>
    <tr>
        <td>20</td>
        <td>NAUSHEEN FATIMA</td>
    </tr>
    <tr>
        <td>21</td>
        <td>MOHAMMED D ABDUL MOIZ</td>
    </tr>
    <tr>
        <td>22</td>
        <td>MD. ASADUDDIN SIDDIQI</td>
    </tr>
    <tr>
        <td>23</td>
        <td>P PHANI SRIKANTH</td>
    </tr>
    <tr>
        <td>24</td>
        <td>MOHD HAMEED KHAN</td>
    </tr>
    <tr>
        <td>25</td>
        <td>ASIFUDDIN</td>
    </tr>
    <tr>
        <td>26</td>
        <td>SYED RAZIUDDIN</td>
    </tr>
    <tr>
        <td>27</td>
        <td>KANEEZ FATIMA</td>
    </tr>
    <tr>
        <td>28</td>
        <td>MUKARRAM HUSSAINI</td>
    </tr>
    <tr>
        <td>29</td>
        <td>CHANDER MOHAN BERI</td>
    </tr>
    <tr>
        <td>30</td>
        <td>ZAID BIN MOHAMMED</td>
    </tr>
    <tr>
        <td>31</td>
        <td>TAHER ALI</td>
    </tr>
    <tr>
        <td>32</td>
        <td>MOHAMMAD AZHAR ALI</td>
    </tr>
    <tr>
        <td>33</td>
        <td>MOHAMMED KHAJA MOINUDDIN</td>
    </tr>
    <tr>
        <td>34</td>
        <td>MOHD. SHAKEEL</td>
    </tr>
    <tr>
        <td>35</td>
        <td>MOHAMMED SOHAIL SUFI</td>
    </tr>
    <tr>
        <td>36</td>
        <td>S. D BASHA</td>
    </tr>
    <tr>
        <td>37</td>
        <td>GULAM NAJMUDDIN</td>
    </tr>
    <tr>
        <td>38</td>
        <td>MOHAMMED PASHA</td>
    </tr>
    <tr>
        <td>39</td>
        <td>ABDUL RAHMAN ESSA AL AMUDI</td>
    </tr>
    <tr>
        <td>40</td>
        <td>SALMAN AHMED</td>
    </tr>
    <tr>
        <td>41</td>
        <td>SHAIK SHAH VALI</td>
    </tr>
    <tr>
        <td>42</td>
        <td>SHAIK MUNEER</td>
    </tr>
    <tr>
        <td>43</td>
        <td>SHAIK ABDUL SALEEM</td>
    </tr>
    <tr>
        <td>44</td>
        <td>ISHRATH JABEEN</td>
    </tr>
    <tr>
        <td>45</td>
        <td>MD ABDUL MAJID</td>
    </tr>
    <tr>
        <td>46</td>
        <td>BUELAH SHARON</td>
    </tr>
    <tr>
        <td>47</td>
        <td>S M K AMJAAD ALI KHAN</td>
    </tr>
    <tr>
        <td>48</td>
        <td>ASMA BEGUM</td>
    </tr>
    <tr>
        <td>49</td>
        <td>SYEDA SUMMAIYA</td>
    </tr>
    <tr>
        <td>50</td>
        <td>SALEHA PARVEEN</td>
    </tr>
    <tr>
        <td>51</td>
        <td>MOHAMMED AYAZ</td>
    </tr>
    <tr>
        <td>52</td>
        <td>NOORA FATIMA JAMAL</td>
    </tr>
    <tr>
        <td>53</td>
        <td>HAFSA FARHEEN</td>
    </tr>
    <tr>
        <td>54</td>
        <td>HABEEBA BANU</td>
    </tr>
    <tr>
        <td>55</td>
        <td>SIDRA UNNISA</td>
    </tr>
    <tr>
        <td>56</td>
        <td>MUNA</td>
    </tr>
    <tr>
        <td>57</td>
        <td>SAFOORA SHAIK</td>
    </tr>
    <tr>
        <td>58</td>
        <td>MEHAR UNISSA</td>
    </tr>
    <tr>
        <td>59</td>
        <td>IRFAN BEGUM</td>
    </tr>
    <tr>
        <td>60</td>
        <td>MUNNI BEGUM</td>
    </tr>
    <tr>
        <td>61</td>
        <td>KHALIDA BEGUM</td>
    </tr>
    <tr>
        <td>62</td>
        <td>SHAKERA BEGUM</td>
    </tr>
    <tr>
        <td>63</td>
        <td>ZAHEEDA BEGUM</td>
    </tr>
    <tr>
        <td>64</td>
        <td>FAREEDA BEGUM</td>
    </tr>
    <tr>
        <td>65</td>
        <td>SAFIA BEGUM</td>
    </tr>
    <tr>
        <td>66</td>
        <td>BALGULA KRISHTAMMA</td>
    </tr>
    <tr>
        <td>67</td>
        <td>GADDAM YIAKAIAH</td>
    </tr>
    <tr>
        <td>68</td>
        <td>MD RIZWAN</td>
    </tr>
    <tr>
        <td>69</td>
        <td>SYED HAMED ALI</td>
    </tr>
    <tr>
        <td>70</td>
        <td>KALTROTH RAVINDER</td>
    </tr>
    <tr>
        <td>71</td>
        <td>SYED ASGHAR ALI</td>
    </tr>
    <tr>
        <td>72</td>
        <td>ASRA KOUSAR</td>
    </tr>
    <tr>
        <td>73</td>
        <td>K RAVINDAR</td>
    </tr>
    <tr>
        <td>74</td>
        <td>SYED MUNAWAR</td>
    </tr>
    <tr>
        <td>75</td>
        <td>MUNEER FATIMA</td>
    </tr>
    <tr>
        <td>76</td>
        <td>MD ALLAUDDIN KHAN</td>
    </tr>
    <tr>
        <td>77</td>
        <td>ALIYA BEGUM</td>
    </tr>
    <tr>
        <td>78</td>
        <td>MOHAMMED ALI</td>
    </tr>
    <tr>
        <td>79</td>
        <td>MOHAMMED JALEEL</td>
    </tr>
    <tr>
        <td>80</td>
        <td>MOHAMMED MUJEEB</td>
    </tr>
    <tr>
        <td>81</td>
        <td>CHAND PASHA</td>
    </tr>
    <tr>
        <td>82</td>
        <td>LINGAM</td>
    </tr>
    <tr>
        <td>83</td>
        <td>SYED ZAFAR PASHA</td>
    </tr>
    <tr>
        <td>84</td>
        <td>SYED ISHAQ</td>
    </tr>
    <tr>
        <td>85</td>
        <td>MOHAMMED GAFFAR</td>
    </tr>
    <tr>
        <td>86</td>
        <td>MOHAMMED AMJAD</td>
    </tr>                            
    
                        </Table>

                    </div>

                  </TabPanel>
                  <TabPanel>
                    <div className="syll text-center">
s                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="syll text-center">
s                    </div>
                  </TabPanel>
                </Tabs>
              </section>
            </Col>
            {/* <Col lg={4} md={4} className="sidebar">
              <aside>
                <div className="sidebar-item category">
                  <div className="title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="sidebar-info">
..                  </div>
                </div>

..                <div className="text-right">
                  <a href="/events" className="pt-10 ">
                    More{' '}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </aside>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Faculty
