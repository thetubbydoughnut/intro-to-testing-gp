import React from 'react'
import { createRoot } from 'react-dom/client'
import UserProfile from './components/UserProfile'
import './styles/reset.css'
import './styles/styles.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <UserProfile fname="Gabriel" lname="Cabrejas" email="gabriel@example.com" location="Pamplona" />
)
