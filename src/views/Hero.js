/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useRef, useState } from 'react'
import { useEditable } from 'use-editable';
import './Hero.css'


function EditableContent(props) {
  const ref = useRef(null)
  useEditable(ref, txt => {
    if (txt.trim() === '') {
      if (props.required) {
        return props.onChange(props.placeholder)
      }
      return props.onChange('')
    }
    return props.onChange(txt)
  }, {
    disabled: props.disabled,
  });

  return (
    <span className={props.disabled ? '' : 'editable-content'} ref={ref} onKeyDown={e => {
      if (e.key === 'Enter') e.preventDefault()
    }}>
      {props.content}
    </span>
  )
}

export default (props) => {
  const [data, setData] = useState(props.structure)

  useEffect(() => {
    props.updateStructure(data)
  }, [data])


  return (
    <div style={{ backgroundImage: `url(${props.background})` }} className="hero-wrapper">
      <div class="hero-title">
        <h1>
          <EditableContent
            disabled={props.disabled}
            placeholder="Título do Site"
            required
            content={data.title}
            onChange={(txt) => {
              setData({
                ...data,
                title: txt
              })
            }} />
          <div class="hero-under">
            <EditableContent
              disabled={props.disabled}
              content={data.under}
              onChange={(txt) => {
                setData({
                  ...data,
                  under: txt
                })
              }} />
          </div>
        </h1>
        <div class="hero-label">
          <EditableContent
            disabled={props.disabled}
            content={data.label}
            onChange={(txt) => {
              setData({
                ...data,
                label: txt
              })
            }} />
        </div>

      </div>
    </div>
  )
}