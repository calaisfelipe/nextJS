"use client"
import React from 'react'

type SelectGroupType = {
    label: string
    disabled?: boolean
    options: {}[]
    onChange: any
    value: () => void

}

const SelectGroup = ({label, disabled, options, onChange, value}:SelectGroupType) => {
  return (
    <div>SelectGroup</div>
  )
}

export default SelectGroup