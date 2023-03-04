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
        <td>S.No.</td>
        <td>Name</td>
        <td>Designation</td>
        <td>Name of the Department</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Dr.Mohammed Safiuddin</td>
        <td>Assoc. Prof.</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Dr.K.Pandu</td>
        <td>Assoc. Prof.</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>3</td>
        <td>S Ramya Kala</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Touseeq Anwar Wasif</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>5</td>
        <td>K.Nanchari</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Waseem Ahmed</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>7</td>
        <td>G Anjaneyulu</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Rafey Ahmed</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Sri Charan</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Ahmed Abdul Ahad</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Sheik Riyaz Uddin</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Nazeeruddin</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Mir Firasat Ali</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Mohd Furkhan</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Abdul Rahman</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Syed Shoeb</td>
        <td>Asst.Prof</td>
        <td>CIVIL</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Mr.S.Md.Mazhar-Ul-Haq</td>
        <td>Asst.Prof</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Mrs. Asra Sultana</td>
        <td>Asst.Prof</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Mr. Mohd.Imran</td>
        <td>Asst.Prof</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Mr. Sk.Khadar Basha</td>
        <td>Asst.Prof</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Mrs. N.Sarawathi</td>
        <td>Asst.Prof</td>
        <td>EEE</td>
    </tr>
    <tr>
        <td>22</td>
        <td>Dr Mohammed Masood</td>
        <td>Professor</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>23</td>
        <td>Dr.B.Srinivasulu</td>
        <td>Assoc. Prof.</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>24</td>
        <td>K Srikanth Reddy</td>
        <td>Asst.Prof</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>25</td>
        <td>Mr.Mohd.Attalique Rabbani</td>
        <td>Asst.Prof</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>26</td>
        <td>Md Mohiuddin</td>
        <td>Asst.Prof</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>27</td>
        <td>Midthur Abdul Salman Khan</td>
        <td>Asst.Prof</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>28</td>
        <td>Md Bahauddin</td>
        <td>Asst.Prof</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>29</td>
        <td>Md  Jaleel Ahmed</td>
        <td>Asst.Prof</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>30</td>
        <td>Mr.Mohammed Nayeem</td>
        <td>Asst.Prof</td>
        <td>MECH</td>
    </tr>
    <tr>
        <td>31</td>
        <td>Ms. Ayesha Sultana Mohammed Begum</td>
        <td>Asst.Prof</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>32</td>
        <td>Ms. Zubeda Begum</td>
        <td>Asst.Prof</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>33</td>
        <td>Mr. Shubhakar</td>
        <td>Asst.Prof</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>34</td>
        <td>Mr. Syed Sultan Mehmood</td>
        <td>Asst.Prof</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>35</td>
        <td>Mr. Mohammed Jayeed</td>
        <td>Asst.Prof</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>36</td>
        <td>Mr. Ahsan Jameel</td>
        <td>Asst.Prof</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>37</td>
        <td>Mr. Syed Zaffar Mahmood</td>
        <td>Asst.Prof</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>38</td>
        <td>Dr. Chandra Shekar</td>
        <td> Professor</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>39</td>
        <td>Dr. Abdul Mateen</td>
        <td>Assoc. Prof.</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>40</td>
        <td>Dr. Mohammed Azam</td>
        <td>Assoc. Prof.</td>
        <td>ECE</td>
    </tr>
    <tr>
        <td>41</td>
        <td>Dr.Surya Mukhi</td>
        <td>Associate professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>42</td>
        <td>Dr.Venkatesan Selvaraj</td>
        <td>Associate professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>43</td>
        <td>Mr.Syed Mujeeb Ul Hassan</td>
        <td>Assistant professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>44</td>
        <td>Mrs Arjumand Jamal</td>
        <td>Assistant professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>45</td>
        <td>Mr.Mohammed Arshad Hussain</td>
        <td>Assistant professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>46</td>
        <td>Mrs.Neha Naznein</td>
        <td>Assistant professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>47</td>
        <td>Mrs.Saba Sheiba</td>
        <td>Assistant professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>48</td>
        <td>Mirza Mudassir Ali Baig</td>
        <td>Assistant professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>49</td>
        <td>Mr.Akmal Hussain</td>
        <td>Assistant professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>50</td>
        <td>Mr.Younus Ali Baig</td>
        <td>Assistant professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>51</td>
        <td>Mr.Mohd Basit Mohiuddin</td>
        <td>Assistant professor</td>
        <td>IT</td>
    </tr>
    <tr>
        <td>52</td>
        <td>Dr. M.A. Bari</td>
        <td>Assoc. Prof.</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>53</td>
        <td>Dr. Jameel Hashmi</td>
        <td>Assoc. Prof.</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>54</td>
        <td>Dr. Syed Asadullah Hussaini</td>
        <td>Assoc. Prof.</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>55</td>
        <td>S.K. Saleem</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>56</td>
        <td>Mukarram Uddin</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>57</td>
        <td>Asma Akbar</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>58</td>
        <td>T. Anita</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>59</td>
        <td>Asjad Mohi Uddin</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>60</td>
        <td>Umme Ruma</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>61</td>
        <td>Shaista Farheen</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>62</td>
        <td>Mohammed Rahmat Ali</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>63</td>
        <td>Madhuri Dachapalli</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>64</td>
        <td>Vaseem Uddin</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>65</td>
        <td>S. Sunaina</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>66</td>
        <td>Mohd Taqi Uddin Ahmed</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>67</td>
        <td>Mohd Akber Ali</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>68</td>
        <td>Nishat Akbari</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>69</td>
        <td>Syed Omer Farooq</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>70</td>
        <td>L. Vaishnavi</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>71</td>
        <td>A.Raj Shaker</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>72</td>
        <td>Ijteba Sultana</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>73</td>
        <td>Ayesha Mehreen</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>74</td>
        <td>Afsha Nishat</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>75</td>
        <td>Nousheen Fathima</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>76</td>
        <td>Syed Moiduddin Shahbaaz</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>77</td>
        <td>Shaheen Fatima</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>78</td>
        <td>Md Hasan Majeed Faaraan</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>79</td>
        <td>Mohammed Sheraz Nadeem</td>
        <td>Asst.Prof</td>
        <td>CSE</td>
    </tr>
    <tr>
        <td>80</td>
        <td>Mr.Vaibhav Lall</td>
        <td>Asst.Prof</td>
        <td>AI&amp;DS</td>
    </tr>
    <tr>
        <td>81</td>
        <td>Mrs.Syeda Anjum Sultana</td>
        <td>Asst.Prof</td>
        <td>AI&amp;DS</td>
    </tr>
    <tr>
        <td>82</td>
        <td>Aleemuddin Syed</td>
        <td>Asst.Prof</td>
        <td>AI&amp;DS</td>
    </tr>
    <tr>
        <td>83</td>
        <td>Dr.Pathan Ahmed Khan</td>
        <td>Assoc. Prof.</td>
        <td>M. Tech CSE</td>
    </tr>
    <tr>
        <td>84</td>
        <td>Heena Yasmin</td>
        <td>Asst.Prof</td>
        <td>M. Tech CSE</td>
    </tr>
    <tr>
        <td>85</td>
        <td>M. Sai Kiran</td>
        <td>Asst.Prof</td>
        <td>M. Tech CSE</td>
    </tr>
    <tr>
        <td>86</td>
        <td>Dr. Md.Ibraheem Altaf  (Phy)</td>
        <td>Assoc. Prof.</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>87</td>
        <td>Dr. Zareena Sultana  (Eng)</td>
        <td>Assoc. Prof.</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>88</td>
        <td>Dr. Sohel Ahmed  (Eng)</td>
        <td>Assoc. Prof.</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>89</td>
        <td>Dr.Ravi Ramavath  (Chem)</td>
        <td>Assoc. Prof.</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>90</td>
        <td>Mr.Aziz Ettesham    (Phy)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>91</td>
        <td>Mr. Riyaz Qureshi   (Math)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>92</td>
        <td>Mr. Vazeer Khan      (Math)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>93</td>
        <td>Mr .Kareemuddin    (Math)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>94</td>
        <td>Mrs. Rama Lingeshwar Rao  (Phy)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>95</td>
        <td>Mrs. Ayesha Hashmi  (Eng)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>96</td>
        <td>Mr Smk Amjad Ali Khan   (Eng)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>97</td>
        <td>Mrs. Bushra Riyaz   (Chm)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>98</td>
        <td>Mrs.M.Ramyashree   (Chm)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>99</td>
        <td>Mrs. Dolly Gautam   (Ic)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>100</td>
        <td>Mrs.Kakulla Prajwala  (Cse)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>101</td>
        <td>Mrs. Imreena Ali (Cse)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>102</td>
        <td>Mrs.Miriyala Gayatri  (Cse)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>103</td>
        <td>Mr.Mohd Abdul Mutalib (Eee)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>104</td>
        <td>Mr .Khaja Owais Ahmed (Ic)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>105</td>
        <td>Mr.Abdul Bari (Ic)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>106</td>
        <td>Mrs. Aqsa Fatima (Eee)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>107</td>
        <td>Mrs.Navaneetha M P(Eee)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>108</td>
        <td>Mr.Jameel (Mech)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>109</td>
        <td>Mr.Amer Qureshi  (Civil)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>110</td>
        <td>Mr.Syed Mohammed (Civil)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>111</td>
        <td>Mrs.Amtul Tahmeena (Evs)</td>
        <td>Asst.Prof</td>
        <td>H&amp;S</td>
    </tr>
    <tr>
        <td>112</td>
        <td>Dr.K.Padmaja</td>
        <td>Associate. Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>113</td>
        <td>Dr.Md.Irfan Uddin</td>
        <td>AssociateProf</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>114</td>
        <td>Mr.Salman Ahmed</td>
        <td>Asst.Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>115</td>
        <td>Ms.Asma Khatoon</td>
        <td>Asst.Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>116</td>
        <td>Mrs.Ishrathjabbeen</td>
        <td>Asst.Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>117</td>
        <td>Mrs.Saba Tarannum</td>
        <td>Asst.Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>118</td>
        <td>Mr.Syed Abdul Razak Quadri</td>
        <td>Asst.Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>119</td>
        <td>Mr.Rameshbabu</td>
        <td>Asst.Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>120</td>
        <td>Mr.Naimatullah Hussaini</td>
        <td>Asst.Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>121</td>
        <td>Mr.Azam Khan</td>
        <td>Asst.Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>122</td>
        <td>Ms.Rakia Begum</td>
        <td>Asst Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>123</td>
        <td>Ms.Afifa Naaz</td>
        <td>Asst. prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>124</td>
        <td>Mr.Rahamanessa Aalamudi</td>
        <td>Asst.Prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>125</td>
        <td>Mr.Venkata Sai Prasad</td>
        <td>Asst.prof</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>126</td>
        <td>Ms.Kubra Fatima</td>
        <td>AsstProf</td>
        <td>MBA</td>
    </tr>
    <tr>
        <td>127</td>
        <td>Mr.Mohammed Khanith</td>
        <td>Asst Prof</td>
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
