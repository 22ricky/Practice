import React from 'react';
import { Row, Col, Menu } from 'antd'
import Link from 'next/link'
import css from './index.less'

export default () => (
  <div className={css.header}>
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className={css.logo}>米兰哥</span>
        <span className={css.slogan}>个人Blog</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="champion"><Link href="/"><a>欧冠</a></Link></Menu.Item>
          <Menu.Item key="league"><Link href="/list"><a>联赛</a></Link></Menu.Item>
          <Menu.Item key="cup">杯赛</Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)