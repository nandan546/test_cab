import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
 
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'User Management',
    to: '/User Management',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
       {
        component: CNavItem,
        name: 'Users',
        to: '/User Management',
      },
      {
        component: CNavItem,
        name: 'Drivers',
        to: '/User Management',
      },
      {
        component: CNavItem,
        name: 'Rides',
        to: '/User Management',
      }
      
    ],
  },
  {
    component: CNavGroup,
    name: 'Trip Management',
    to: '/Trip Management',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Buttons',
      //   to: '/buttons/buttons',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Buttons groups',
      //   to: '/buttons/button-groups',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Dropdowns',
      //   to: '/buttons/dropdowns',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fare Management',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Form Control',
      //   to: '/forms/form-control',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Select',
      //   to: '/forms/select',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Checks & Radios',
      //   to: '/forms/checks-radios',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Range',
      //   to: '/forms/range',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Input Group',
      //   to: '/forms/input-group',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Floating Labels',
      //   to: '/forms/floating-labels',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Layout',
      //   to: '/forms/layout',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Validation',
      //   to: '/forms/validation',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Driver Management',
    to: '/Driver Management',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Form Control',
      //   to: '/forms/form-control',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Select',
      //   to: '/forms/select',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Checks & Radios',
      //   to: '/forms/checks-radios',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Range',
      //   to: '/forms/range',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Input Group',
      //   to: '/forms/input-group',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Floating Labels',
      //   to: '/forms/floating-labels',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Layout',
      //   to: '/forms/layout',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Validation',
      //   to: '/forms/validation',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Vehicle Management',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'CoreUI Free',
      //   to: '/icons/coreui-icons',
      //   badge: {
      //     color: 'success',
      //     text: 'NEW',
      //   },
      // },
      // {
      //   component: CNavItem,
      //   name: 'CoreUI Flags',
      //   to: '/icons/flags',
      // },
      // {
      //   component: CNavItem,
      //   name: 'CoreUI Brands',
      //   to: '/icons/brands',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Safety and Compliance',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Alerts',
      //   to: '/notifications/alerts',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Badges',
      //   to: '/notifications/badges',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Modal',
      //   to: '/notifications/modals',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Toasts',
      //   to: '/notifications/toasts',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Support and Customer',
    to: '/Support and Customer',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Alerts',
      //   to: '/notifications/alerts',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Badges',
      //   to: '/notifications/badges',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Modal',
      //   to: '/notifications/modals',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Toasts',
      //   to: '/notifications/toasts',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reporting and Analytics',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Alerts',
      //   to: '/notifications/alerts',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Badges',
      //   to: '/notifications/badges',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Modal',
      //   to: '/notifications/modals',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Toasts',
      //   to: '/notifications/toasts',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Platform Customization',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Alerts',
      //   to: '/notifications/alerts',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Badges',
      //   to: '/notifications/badges',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Modal',
      //   to: '/notifications/modals',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Toasts',
      //   to: '/notifications/toasts',
      // },
    ],
  },
]

export default _nav
