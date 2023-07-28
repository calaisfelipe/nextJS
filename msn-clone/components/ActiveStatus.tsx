"use client"
import React from 'react'
import useActiveChannel from '@/app/hooks/useActiveChannel'


const ActiveStatus = () => {
  useActiveChannel()
  return null
}

export default ActiveStatus