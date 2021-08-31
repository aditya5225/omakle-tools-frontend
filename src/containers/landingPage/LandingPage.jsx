
import React, { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  Input,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import client from "../../utils/api/HTTPClient";
import api from "../../utils/api/apilist";
import './components/LandingPage.scss';
import Icon from '@mdi/react'
import { mdiChevronRight, mdiMenuDown, mdiGoogleCirclesExtended } from '@mdi/js'
import MaxresDefault from '../../assets/images/maxresdefault.jpg';


const LandingPage = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cardData, setcardData] = useState([1, 2, 3, 4, 5, 4, 4, 4,4 ]);


  const toggle = () => setDropdownOpen(prevState => !prevState);

  // const fetchSeatMapFloorsAndRoomsDataActions = () => {

  //   let postData = { data: 'test' };

  //   client.put(api.test_api, postData, (error, response) => {
  //     if (!error) {
  //       if (!response.error) {
  //         console.log(response);
  //         setGetData(response.data);
  //       } else {
  //         console.log('error');
  //       }
  //     } else {

  //     }
  //   });
  // }


  // useEffect(() => {

  //   fetchSeatMapFloorsAndRoomsDataActions();

  // }, [])


  return (
    <Container
      fluid={true}
      className='landing_page'
    >
      <div className='background_icon'>
        <Icon path={mdiGoogleCirclesExtended}
          className='bk_icon'
          title="background icon"
          size={20}
          color="#4e7aee"
          spin={20}
        />
      </div>

      <Row>
        <Col className='col-11 mx-auto'>
          <div className='search_menu shadow-sm sticky-top'>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className='dropdown_menu'>
              <DropdownToggle className='dropdown_button d-flex justify-content-between align-items-center'>
                <span> All</span>  <Icon path={mdiMenuDown}
                  title="more option"
                  size={.9}
                  color="#4e7aee"
                /> </DropdownToggle>
              <DropdownMenu className='dropdown-menu'>
                <DropdownItem className='dropdown-item'>Foo Action</DropdownItem>

                <DropdownItem className='dropdown-item d-flex justify-content-between align-items-center'> <span> Right </span>
                  <DropdownMenu className='dropdown-menu dropdown-submenu'>
                    <DropdownItem className='dropdown-item'>Foo Action</DropdownItem>
                    <DropdownItem className='dropdown-item'>Bar Action</DropdownItem>
                    <DropdownItem className='dropdown-item'> left  </DropdownItem>
                  </DropdownMenu>
                  <Icon path={mdiChevronRight}
                    title="more option"
                    size={.8}
                    color="#4e7aee"
                  />
                </DropdownItem>

                <DropdownItem className='dropdown-item'>Bar Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div className='menu_devider'></div>

            <div className='menu_searchBar'>
              <Input type='text' className='search_menu' placeholder='Search..' />
            </div>
          </div>

          <Row>
            {
              cardData.map((val, ind) => {
                return (
                  <Col sm={6} md={4} lg={3} className='p-3'>
                    <Card className='tool_card'>
                      <CardImg top width="100%" src={MaxresDefault} alt="Card image cap" />
                      <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>Some quick example text.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
