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
        <th>Title</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Date of Joining</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Mr.</td>
        <td>SAUDAGAR MOHAMMED MAZHAR</td>
        <td>HAQ</td>
        <td>Male</td>
        <td>ELECTRICAL AND ELECTRONICS ENGINEERING</td>
        <td>14/9/2020</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>BARI</td>
        <td>Male</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>4/9/16</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Dr.</td>
        <td>SYEDA</td>
        <td>IKRAMA</td>
        <td>Female</td>
        <td>MASTERS IN BUSINESS MANAGEMENT</td>
        <td>21/9/2015</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Dr.</td>
        <td>SOHEL</td>
        <td>AHMED</td>
        <td>Male</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>24/7/2015</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Mr.</td>
        <td>MOHD</td>
        <td>UDDIN</td>
        <td>Male</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>7/1/16</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Mr.</td>
        <td>MIR FAROOQ</td>
        <td>ALI</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>11/7/16</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Mr.</td>
        <td>RAGHAVENDER</td>
        <td>AVANGAPURAM</td>
        <td>Male</td>
        <td>COMPUTER SCIENCE AND ENGINEERING</td>
        <td>11/1/11</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Mrs.</td>
        <td>NUZHATH</td>
        <td>ALI</td>
        <td>Female</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>5/7/15</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Dr.</td>
        <td>ZAREENA</td>
        <td>SULTANA</td>
        <td>Female</td>
        <td>FIRST YEAR/OTHER</td>
        <td>8/8/16</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Ms.</td>
        <td>VIJAYA</td>
        <td>VEMULA</td>
        <td>Female</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>15/7/2016</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Mr.</td>
        <td>RIYAZ</td>
        <td>KHAN</td>
        <td>Male</td>
        <td>ELECTRONICS AND COMMUNICATIONS ENGINEERING</td>
        <td>3/7/17</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Mr.</td>
        <td>FAREED AHMED</td>
        <td>SHAIK</td>
        <td>Male</td>
        <td>ELECTRICAL AND ELECTRONICS ENGINEERING</td>
        <td>1/7/17</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Mr.</td>
        <td>TOUSEEQ</td>
        <td>WASIF</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>28/8/2017</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Mrs.</td>
        <td>GOUSIA</td>
        <td>TABASSUM</td>
        <td>Female</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>28/8/2017</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Ms.</td>
        <td>ASMA</td>
        <td>AKBAR</td>
        <td>Female</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>1/1/17</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Mr.</td>
        <td>MOHD</td>
        <td>ISMAIL</td>
        <td>Male</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>5/8/17</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Mr.</td>
        <td>MOHD</td>
        <td>AMER</td>
        <td>Male</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>10/8/17</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Mr.</td>
        <td>MIR</td>
        <td>ABEDI</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>5/8/17</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Mr.</td>
        <td>ABDUL</td>
        <td>RAHMAN</td>
        <td>Male</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>5/8/17</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Mr.</td>
        <td>SRIKANTH</td>
        <td>DONDAPATI</td>
        <td>Male</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>5/6/17</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Mr.</td>
        <td>SYEDA</td>
        <td>RIAZ</td>
        <td>Female</td>
        <td>BASIC AND APPLIED SCIENCES</td>
        <td>15/7/2016</td>
    </tr>
    <tr>
        <td>22</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>KHAN</td>
        <td>Male</td>
        <td>APPLIED MATHEMATICS</td>
        <td>20/7/2017</td>
    </tr>
    <tr>
        <td>23</td>
        <td>Ms.</td>
        <td>SYEDA</td>
        <td>JABEEN</td>
        <td>Female</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>2/1/19</td>
    </tr>
    <tr>
        <td>24</td>
        <td>Mr.</td>
        <td>SYED</td>
        <td>AHMED</td>
        <td>Male</td>
        <td>ELECTRICAL AND ELECTRONICS ENGINEERING</td>
        <td>11/7/18</td>
    </tr>
    <tr>
        <td>25</td>
        <td>Mr.</td>
        <td>SRICHARAN</td>
        <td>KOKKONDA</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>26/7/2018</td>
    </tr>
    <tr>
        <td>26</td>
        <td>Mr.</td>
        <td>AHMED</td>
        <td>ABDUL AHAD</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>2/7/18</td>
    </tr>
    <tr>
        <td>27</td>
        <td>Mr.</td>
        <td>IRFAN</td>
        <td>AHMED</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>2/7/18</td>
    </tr>
    <tr>
        <td>28</td>
        <td>Mrs.</td>
        <td>THOKALA</td>
        <td>ANITA</td>
        <td>Female</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>21/7/2018</td>
    </tr>
    <tr>
        <td>29</td>
        <td>Mrs.</td>
        <td>MULIKI</td>
        <td>MANASA</td>
        <td>Female</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>2/7/18</td>
    </tr>
    <tr>
        <td>30</td>
        <td>Mr.</td>
        <td>NAYANI</td>
        <td>VENKATA SAI PRASAD</td>
        <td>Male</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>2/7/18</td>
    </tr>
    <tr>
        <td>31</td>
        <td>Mrs.</td>
        <td>ARJUMAND</td>
        <td>SIDDIQUI</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>2/1/19</td>
    </tr>
    <tr>
        <td>32</td>
        <td>Dr.</td>
        <td>ABDUL BARI</td>
        <td>MOHAMMED</td>
        <td>Male</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>25/6/2019</td>
    </tr>
    <tr>
        <td>33</td>
        <td>Mr.</td>
        <td>KHAN</td>
        <td>PATHAN</td>
        <td>Male</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>2/1/20</td>
    </tr>
    <tr>
        <td>34</td>
        <td>Ms.</td>
        <td>SHAISTA</td>
        <td>FARHEEN</td>
        <td>Female</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>2/1/20</td>
    </tr>
    <tr>
        <td>35</td>
        <td>Mrs.</td>
        <td>AQSA</td>
        <td>FATIMA</td>
        <td>Female</td>
        <td>ELECTRONICS AND ELECTRICAL ENGINEERING</td>
        <td>24/6/2019</td>
    </tr>
    <tr>
        <td>36</td>
        <td>Ms.</td>
        <td>NAZNEIN</td>
        <td>NEHA </td>
        <td>Female</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>2/1/20</td>
    </tr>
    <tr>
        <td>37</td>
        <td>Ms.</td>
        <td>HADIYA</td>
        <td>SAMEEN</td>
        <td>Female</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>1/1/20</td>
    </tr>
    <tr>
        <td>38</td>
        <td>Mr.</td>
        <td>SYED AKMAL</td>
        <td>JUNAIDI</td>
        <td>Male</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>2/1/20</td>
    </tr>
    <tr>
        <td>39</td>
        <td>Mr.</td>
        <td>MIRZA</td>
        <td>ALI BAIG</td>
        <td>Male</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>2/1/20</td>
    </tr>
    <tr>
        <td>40</td>
        <td>Mrs.</td>
        <td>AYESHA</td>
        <td>SIDDIQUA</td>
        <td>Female</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>1/1/20</td>
    </tr>
    <tr>
        <td>41</td>
        <td>Ms.</td>
        <td>KANCHALA</td>
        <td>NANCHARI</td>
        <td>Female</td>
        <td>CIVIL ENGINEERING</td>
        <td>11/7/13</td>
    </tr>
    <tr>
        <td>42</td>
        <td>Mr.</td>
        <td>VENKAT</td>
        <td>VORUGANTI</td>
        <td>Male</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>1/7/19</td>
    </tr>
    <tr>
        <td>43</td>
        <td>Ms.</td>
        <td>SYEDA</td>
        <td>SULTANA</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>2/2/19</td>
    </tr>
    <tr>
        <td>44</td>
        <td>Ms.</td>
        <td>SARA</td>
        <td>TABASSUM</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>2/2/20</td>
    </tr>
    <tr>
        <td>45</td>
        <td>Ms.</td>
        <td>HAMEED</td>
        <td>BEGUM</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>3/2/20</td>
    </tr>
    <tr>
        <td>46</td>
        <td>Dr.</td>
        <td>ARIFA</td>
        <td>BEGUM</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>19/8/2019</td>
    </tr>
    <tr>
        <td>47</td>
        <td>Ms.</td>
        <td>TAHSEEN</td>
        <td>UNNISA</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>2/2/19</td>
    </tr>
    <tr>
        <td>48</td>
        <td>Mr.</td>
        <td>MOHD</td>
        <td>MUSHTAQ</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>2/2/20</td>
    </tr>
    <tr>
        <td>49</td>
        <td>Dr.</td>
        <td>MOHAMMED</td>
        <td>ALTAF</td>
        <td>Male</td>
        <td>APPLIED PHYSICS</td>
        <td>1/5/18</td>
    </tr>
    <tr>
        <td>50</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>QURESHI</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>11/7/19</td>
    </tr>
    <tr>
        <td>51</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>UDDIN</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>1/2/20</td>
    </tr>
    <tr>
        <td>52</td>
        <td>Mr.</td>
        <td>MOHD</td>
        <td>AHMED</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>2/2/20</td>
    </tr>
    <tr>
        <td>53</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>AHMED</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>2/2/20</td>
    </tr>
    <tr>
        <td>54</td>
        <td>Mr.</td>
        <td>SRIKANTH</td>
        <td>KALVALA</td>
        <td>Male</td>
        <td>ELECTRONICS AND COMMUNICATIONS ENGINEERING</td>
        <td>24/6/2019</td>
    </tr>
    <tr>
        <td>55</td>
        <td>Ms.</td>
        <td>ASMA</td>
        <td>KHATOON</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>2/2/10</td>
    </tr>
    <tr>
        <td>56</td>
        <td>Ms.</td>
        <td>JUVERIA</td>
        <td>GHORI</td>
        <td>Female</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>8/1/20</td>
    </tr>
    <tr>
        <td>57</td>
        <td>Ms.</td>
        <td>MOHAMMED</td>
        <td>BEGUM</td>
        <td>Female</td>
        <td>ELECTRONICS AND COMMUNICATIONS ENGINEERING</td>
        <td>15/2/2019</td>
    </tr>
    <tr>
        <td>58</td>
        <td>Ms.</td>
        <td>FARHA</td>
        <td>RAFATH</td>
        <td>Female</td>
        <td>ELECTRONICS AND COMMUNICATIONS ENGINEERING</td>
        <td>18/6/2019</td>
    </tr>
    <tr>
        <td>59</td>
        <td>Mr.</td>
        <td>FAROOQ</td>
        <td>MOHAMMED</td>
        <td>Male</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>10/1/20</td>
    </tr>
    <tr>
        <td>60</td>
        <td>Mr.</td>
        <td>SHAIK</td>
        <td>UDDIN</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>2/2/20</td>
    </tr>
    <tr>
        <td>61</td>
        <td>Mr.</td>
        <td>SYED</td>
        <td>MOHAMMED</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>2/2/20</td>
    </tr>
    <tr>
        <td>62</td>
        <td>Mr.</td>
        <td>NAZEERUDDIN</td>
        <td>MOHD</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>2/2/20</td>
    </tr>
    <tr>
        <td>63</td>
        <td>Mr.</td>
        <td>JAFRIMA</td>
        <td>ALEEM</td>
        <td>Male</td>
        <td>BASIC AND APPLIED SCIENCES</td>
        <td>4/7/18</td>
    </tr>
    <tr>
        <td>64</td>
        <td>Mr.</td>
        <td>ABDUL</td>
        <td>BARI</td>
        <td>Male</td>
        <td>BASIC AND APPLIED SCIENCES</td>
        <td>16/8/2019</td>
    </tr>
    <tr>
        <td>65</td>
        <td>Mrs.</td>
        <td>HAMEEDA</td>
        <td>BEGUM</td>
        <td>Female</td>
        <td>BASIC AND APPLIED SCIENCES</td>
        <td>6/2/20</td>
    </tr>
    <tr>
        <td>66</td>
        <td>Ms.</td>
        <td>RAFEEQ</td>
        <td>BEGUM</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>23/1/2020</td>
    </tr>
    <tr>
        <td>67</td>
        <td>Mr.</td>
        <td>SYED</td>
        <td>UDDIN</td>
        <td>Male</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>1/9/16</td>
    </tr>
    <tr>
        <td>68</td>
        <td>Ms.</td>
        <td>ZUBEDA</td>
        <td>BEGUM</td>
        <td>Female</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>2/2/20</td>
    </tr>
    <tr>
        <td>69</td>
        <td>Mrs.</td>
        <td>SULTANA</td>
        <td>ASRA</td>
        <td>Female</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>1/7/19</td>
    </tr>
    <tr>
        <td>70</td>
        <td>Mrs.</td>
        <td>JAISWAL</td>
        <td>SURYA MUKHI</td>
        <td>Female</td>
        <td>ELECTRONICS &amp; COMPUTER SCIENCE</td>
        <td>3/7/17</td>
    </tr>
    <tr>
        <td>71</td>
        <td>Mr.</td>
        <td>FIRASATH</td>
        <td>MIR</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>4/6/18</td>
    </tr>
    <tr>
        <td>72</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>PARVEZ</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>30/5/2016</td>
    </tr>
    <tr>
        <td>73</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>UDDIN</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>2/1/20</td>
    </tr>
    <tr>
        <td>74</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>ZAFFERSHAQADRI</td>
        <td>Male</td>
        <td>ELECTRONICS AND COMMUNICATIONS ENGINEERING</td>
        <td>20/2/2020</td>
    </tr>
    <tr>
        <td>75</td>
        <td>Mr.</td>
        <td>SALMAN</td>
        <td>AHMED</td>
        <td>Male</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>20/3/2012</td>
    </tr>
    <tr>
        <td>76</td>
        <td>Mr.</td>
        <td>MOHD</td>
        <td>JAMEEL</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>11/7/15</td>
    </tr>
    <tr>
        <td>77</td>
        <td>Mr.</td>
        <td>KRISHNA</td>
        <td>PUNNA</td>
        <td>Male</td>
        <td>BASIC AND APPLIED SCIENCES</td>
        <td>13/9/2019</td>
    </tr>
    <tr>
        <td>78</td>
        <td>Mr.</td>
        <td>ABDUL</td>
        <td>SHAIK</td>
        <td>Male</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>10/6/17</td>
    </tr>
    <tr>
        <td>79</td>
        <td>Mr.</td>
        <td>MIDTHUR</td>
        <td>SALMANKHAN</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>7/10/20</td>
    </tr>
    <tr>
        <td>80</td>
        <td>Mrs.</td>
        <td>PRAJWALA</td>
        <td>KAKULLA</td>
        <td>Female</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>2/12/20</td>
    </tr>
    <tr>
        <td>81</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>ALI</td>
        <td>Male</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>14/9/2020</td>
    </tr>
    <tr>
        <td>82</td>
        <td>Mr.</td>
        <td>AZAM</td>
        <td>MAHAMMAD</td>
        <td>Male</td>
        <td>MASTERS IN BUSINESS ADMINISTRATION</td>
        <td>5/9/20</td>
    </tr>
    <tr>
        <td>83</td>
        <td>Mr.</td>
        <td>MD</td>
        <td>BAHAUDDIN</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>24/9/2020</td>
    </tr>
    <tr>
        <td>84</td>
        <td>Mr.</td>
        <td>ANJANEYULU</td>
        <td>GIRI</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>2/12/20</td>
    </tr>
    <tr>
        <td>85</td>
        <td>Mr.</td>
        <td>SAMDANI</td>
        <td>MOHD</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>2/12/20</td>
    </tr>
    <tr>
        <td>86</td>
        <td>Mr.</td>
        <td>ATTALIQUE</td>
        <td>MOHD</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>11/7/13</td>
    </tr>
    <tr>
        <td>87</td>
        <td>Dr.</td>
        <td>MUKTA</td>
        <td>KABRA</td>
        <td>Female</td>
        <td>FIRST YEAR/OTHER</td>
        <td>1/3/16</td>
    </tr>
    <tr>
        <td>88</td>
        <td>Mrs.</td>
        <td>BASKARAN</td>
        <td>MANIGANDAN</td>
        <td>Female</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>27/7/2012</td>
    </tr>
    <tr>
        <td>89</td>
        <td>Mrs.</td>
        <td>MATHEEN</td>
        <td>SULTANA</td>
        <td>Female</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>10/3/10</td>
    </tr>
    <tr>
        <td>90</td>
        <td>Dr.</td>
        <td>MOHD</td>
        <td>UDDIN</td>
        <td>Male</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>1/3/21</td>
    </tr>
    <tr>
        <td>91</td>
        <td>Mrs.</td>
        <td>KUBRA</td>
        <td>FATIMA</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>15/3/2018</td>
    </tr>
    <tr>
        <td>92</td>
        <td>Mr.</td>
        <td>RAMALINGESWARA RAO</td>
        <td>TORLIKONDA</td>
        <td>Male</td>
        <td>FIRST YEAR/OTHER</td>
        <td>18/3/2015</td>
    </tr>
    <tr>
        <td>93</td>
        <td>Mrs.</td>
        <td>SHAHEEN</td>
        <td>FATIMA</td>
        <td>Female</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>23/12/2017</td>
    </tr>
    <tr>
        <td>94</td>
        <td>Dr.</td>
        <td>MINHAJ AHMED</td>
        <td>MOHAMMED</td>
        <td>Male</td>
        <td>FIRST YEAR/OTHER</td>
        <td>14/3/2018</td>
    </tr>
    <tr>
        <td>95</td>
        <td>Mrs.</td>
        <td>MAHBEEN</td>
        <td>NAAZ</td>
        <td>Female</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>22/11/2013</td>
    </tr>
    <tr>
        <td>96</td>
        <td>Ms.</td>
        <td>S</td>
        <td>SUNAINA</td>
        <td>Female</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>29/1/2021</td>
    </tr>
    <tr>
        <td>97</td>
        <td>Ms.</td>
        <td>MADURI</td>
        <td>DACHEPALLY</td>
        <td>Female</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>30/1/2021</td>
    </tr>
    <tr>
        <td>98</td>
        <td>Mr.</td>
        <td>ASJAD</td>
        <td>UDDIN</td>
        <td>Male</td>
        <td>COMPUTER SCIENCE AND ENGINEERING</td>
        <td>12/12/19</td>
    </tr>
    <tr>
        <td>99</td>
        <td>Mr.</td>
        <td>SHUBHAKAR</td>
        <td>PARIKI</td>
        <td>Male</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>1/11/18</td>
    </tr>
    <tr>
        <td>100</td>
        <td>Miss</td>
        <td>RAMYAKALA</td>
        <td>SABBINENI</td>
        <td>Female</td>
        <td>CIVIL ENGINEERING</td>
        <td>11/7/17</td>
    </tr>
    <tr>
        <td>101</td>
        <td>Mrs.</td>
        <td>JYOTHSNA</td>
        <td>SABBJ</td>
        <td>Female</td>
        <td>CIVIL ENGINEERING</td>
        <td>12/8/20</td>
    </tr>
    <tr>
        <td>102</td>
        <td>Ms.</td>
        <td>REHANA</td>
        <td>FATHIMA</td>
        <td>Female</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>3/2/20</td>
    </tr>
    <tr>
        <td>103</td>
        <td>Dr.</td>
        <td>MOHAMMED</td>
        <td>MASOOD</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>1/1/19</td>
    </tr>
    <tr>
        <td>104</td>
        <td>Mr.</td>
        <td>DASTAGIR</td>
        <td>MOHD</td>
        <td>Male</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>20/3/2019</td>
    </tr>
    <tr>
        <td>105</td>
        <td>Mr.</td>
        <td>SYED</td>
        <td>HASSAN</td>
        <td>Male</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>15/11/2021</td>
    </tr>
    <tr>
        <td>106</td>
        <td>Ms.</td>
        <td>AFEEFA</td>
        <td>SIDDIQUA</td>
        <td>Female</td>
        <td>INFORMATION TECHNOLOGY</td>
        <td>18/10/2021</td>
    </tr>
    <tr>
        <td>107</td>
        <td>Dr.</td>
        <td>ABDUL</td>
        <td>AHMED</td>
        <td>Male</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>1/11/21</td>
    </tr>
    <tr>
        <td>108</td>
        <td>Mr.</td>
        <td>MOHD</td>
        <td>UDDIN</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING</td>
        <td>20/10/2021</td>
    </tr>
    <tr>
        <td>109</td>
        <td>Dr.</td>
        <td>MOHAMMED</td>
        <td>HASHMI</td>
        <td>Male</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>3/1/22</td>
    </tr>
    <tr>
        <td>110</td>
        <td>Mr.</td>
        <td>VASEEMUDDIN</td>
        <td>SHAIK</td>
        <td>Male</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>31/12/2021</td>
    </tr>
    <tr>
        <td>111</td>
        <td>Mr.</td>
        <td>SYED SULTAN</td>
        <td>MAHMOOD</td>
        <td>Male</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>1/11/21</td>
    </tr>
    <tr>
        <td>112</td>
        <td>Mr.</td>
        <td>MOHD</td>
        <td>JAYEED</td>
        <td>Male</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>1/11/21</td>
    </tr>
    <tr>
        <td>113</td>
        <td>Mrs.</td>
        <td>BEGUM</td>
        <td>AFSHAN</td>
        <td>Female</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>22/11/2021</td>
    </tr>
    <tr>
        <td>114</td>
        <td>Mr.</td>
        <td>NAVEEN</td>
        <td>THIRUVEEDHULA</td>
        <td>Male</td>
        <td>ELECTRICAL AND ELECTRONICS ENGINEERING</td>
        <td>15/11/2021</td>
    </tr>
    <tr>
        <td>115</td>
        <td>Mrs.</td>
        <td>RAMYASREE</td>
        <td>MIRDHATI</td>
        <td>Female</td>
        <td>APPLIED CHEMISTRY</td>
        <td>1/11/21</td>
    </tr>
    <tr>
        <td>116</td>
        <td>Mr.</td>
        <td>MOHAMMED</td>
        <td>QURESHI</td>
        <td>Male</td>
        <td>BASIC AND APPLIED SCIENCES</td>
        <td>15/11/2021</td>
    </tr>
    <tr>
        <td>117</td>
        <td>Mr.</td>
        <td>MOHMMAD</td>
        <td>AHMED</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>29/11/2021</td>
    </tr>
    <tr>
        <td>118</td>
        <td>Mr.</td>
        <td>AHMED</td>
        <td>RAHMAN</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>8/11/21</td>
    </tr>
    <tr>
        <td>119</td>
        <td>Mrs.</td>
        <td>NAYANKANTI</td>
        <td>SARASWATHI</td>
        <td>Female</td>
        <td>ELECTRICAL AND ELECTRONICS ENGINEERING</td>
        <td>1/4/22</td>
    </tr>
    <tr>
        <td>120</td>
        <td>Ms.</td>
        <td>L</td>
        <td>VAISHNAVI</td>
        <td>Female</td>
        <td>COMPUTER SCEINCE &amp; ENGINEERING</td>
        <td>1/4/22</td>
    </tr>
    <tr>
        <td>121</td>
        <td>Ms.</td>
        <td>DURGAMSHEIKH</td>
        <td>SAMEENA</td>
        <td>Female</td>
        <td>COMPUTER SCIENCE &amp; TECHNOLOGY</td>
        <td>7/3/22</td>
    </tr>
    <tr>
        <td>122</td>
        <td>Mr.</td>
        <td>SRIKANTH</td>
        <td>REDDY</td>
        <td>Male</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>22/10/2010</td>
    </tr>
    <tr>
        <td>123</td>
        <td>Miss</td>
        <td>SHAZIA</td>
        <td>FARHA</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION</td>
        <td>1/8/11</td>
    </tr>
    <tr>
        <td>124</td>
        <td>Miss</td>
        <td>UMME</td>
        <td>RUMA</td>
        <td>Female</td>
        <td>COMPUTER SCIENCE &amp; ENGINEERING</td>
        <td>14/3/2019</td>
    </tr>
    <tr>
        <td>125</td>
        <td>Mr.</td>
        <td>AHSAN</td>
        <td>JAMIL</td>
        <td>Male</td>
        <td>ELECTRONICS &amp; COMMUNICATION ENGG</td>
        <td>9/7/12</td>
    </tr>

    <tr>
        <td>126</td>
        <td>Dr.</td>
        <td>MOHAMMED</td>
        <td>SAFUDIIN</td>
        <td>Male</td>
        <td>CIVIL ENGINEERING </td>
        <td>01/09/2022</td>
    </tr>
    <tr>
        <td>127</td>
        <td>Dr.</td>
        <td>K</td>
        <td>Padmaja</td>
        <td>Female</td>
        <td>BUSINESS ADMINISTRATION </td>
        <td>17/08/2022</td>
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
