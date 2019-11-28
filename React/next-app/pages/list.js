import React from 'react'
import { Row, Col } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import css from './index.less'


const List = () => (
  <>
    <Head>
      <title>List</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    <Row type="flex" justify="center" className={css.main}>
      <Col xs={24} sm={24} md={16} lg={18} xl={14} className={css.left}>
        左
      </Col>
      <Col xs={0} sm={0} md={7} lg={5} xl={4} className={css.right}>
        右
      </Col>
    </Row>
  </>
)

export default List
