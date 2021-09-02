
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
import { mdiChevronRight, mdiMenuDown, mdiRadiusOutline } from '@mdi/js'
import MaxresDefault from '../../assets/images/maxresdefault.jpg';
import { Link } from 'react-router-dom';


const LandingPage = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cardData, setcardData] = useState([
    {
      toolTitle: 'Youtube Thumbnail Downloader',
      toolRoute: '/tools/youtube-thumbnail-downloader',
    }
  ]);


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
                  <Link key={ind} to={val.toolRoute} className= 'text-decoration-none'>
                    <Col sm={6} md={4} lg={3} className='p-3'>
                      <Card className='tool_card'>
                        <CardImg top width="100%" src={MaxresDefault} alt="Card image cap" />
                        <CardBody>
                          <CardTitle tag="h5"> {val.toolTitle} </CardTitle>
                        </CardBody>
                      </Card>
                    </Col>
                  </Link>
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
