
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
import './components/LandingPage.scss';
import Icon from '@mdi/react'
import { mdiChevronRight, mdiMenuDown, mdiRadiusOutline } from '@mdi/js'
import MaxresDefault from '../../assets/images/maxresdefault.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const LandingPage = () => {

  const webToolsData = useSelector(state => state.webToolsDataReducer.webTools)

  const [dropdownOpen, setDropdownOpen] = useState(false);


  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <Container
      fluid={true}
      className='landing_page p-3'
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

          <Row className='pt-3'>
            {
              webToolsData.map((val, ind) => {
                return (
                  <Col sm={6} md={4} lg={3} className='p-3'>
                    <Link key={ind} to={val.toolRoute} className='text-decoration-none'>
                      <Card className='tool_card'>
                        <CardImg top width="100%" src={MaxresDefault} alt="Card image cap" />
                        <CardBody>
                          <CardTitle tag="h5"> {val.toolTitle} </CardTitle>
                        </CardBody>
                      </Card>
                    </Link>
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
