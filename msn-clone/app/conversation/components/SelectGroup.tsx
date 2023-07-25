"use client";
import React from "react";
import Select from "react-select";

type SelectGroupType = {
  label: string;
  disabled?: boolean;
  options: {}[];
  onChange: any;
  value?: Record<string, any>;
};

const SelectGroup = ({
  label,
  disabled,
  options,
  onChange,
  value,
}: SelectGroupType) => {
  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <div className="mt-2">
        <Select
          options={options}
          isDisabled={disabled}
          onChange={onChange}
          value={value}
          isMulti
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          classNames={{
            control: () => "text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default SelectGroup;
