import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Row, Col, Menu } from 'antd'
import Link from 'next/link'
import api from '../../config/api'
import css from './index.less'

export default function() {
  const [menus, setMenus] = useState([])
  const getMenus = async function() {
    axios.get(api.type).then(({ data }) => {
      setMenus(data)
    })
  }

  useEffect(() => {
    getMenus()
  }, [])

  return (
    <div className={css.header}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className={css.logo}>米兰哥</span>
          <span className={css.slogan}>个人Blog</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            {menus.map(({ id, typeName }) =>
              <Menu.Item key={`${id}`}>
                <Link href={id ? `/list?id=${id}` : '/'}>
                  <a>{typeName}</a>
                </Link>
              </Menu.Item>
            )}
          </Menu>
        </Col>
      </Row>
    </div>
  )
}