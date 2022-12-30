import React from 'react'
import { Row, Col, Container, Table } from 'react-bootstrap'
const Faculty = () => {
  return (
    <>
      <section className="breadcrumb_details bg_cover">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="breadcrumb_details_content">
                <h4 className="title">Faculty List</h4>
                <div className="breadcrumb_content">
                  <ul className="breadcrumb justify-content">
                    <li>
                      <a href="/">
                        <i class="fa fa-home" aria-hidden="true"></i> Home
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#active">
                      Faculty List
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section class="courses_details_area pt-40 pb-30">
        <div class="container">
            <div class="row">
  
                <div class="col-lg-8 order-lg-first">
                    <div class="courses_details_content">
                        <div class="single_courses_details  mt-40">
                            <h4 class="courses_details_title capital">Faculty List</h4>
                            {/* <h6>The following committee has been nominated for RTI Cell.</h6> */}
                        </div>
                        <div class="single_courses_details  mt-40">
                            
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
        <td>.</td>
        <td>NEHA NAZNEIN</td>
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
        <td>Female</td>
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
</Table>

                        </div>              
                    </div>
                </div>
            </div>
        </div>
    </section>


    </>
  )
}

export default Faculty
