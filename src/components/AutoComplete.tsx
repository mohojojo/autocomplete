import { CSSProperties, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface AutoCompleteProps {
    onChange: (value:string) => void
    results?: any[]
    labelProp: string
    keyProp: string
    placeholder?: string
    inputStyle?: CSSProperties
}

const AutoComplete  = ({
    onChange,
    results = [],
    labelProp,
    keyProp,
    placeholder,
    inputStyle,
}: AutoCompleteProps) => {

    const [value, setValue] = useState('')
    const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false)
    const portal = document.getElementById('autocomplete-portal')

    useEffect(() => {
        /// opening a portal for dropdown items
        const portal = document.createElement('div')
        portal.setAttribute('id', 'autocomplete-portal')
        portal.style.position = 'relative'
        document.body.appendChild(portal)
    }, [])

    const onTextChange = (event: { target: { value: string } }) => {
        const searchText = event.target.value
        setValue(searchText)
        setIsSuggestionsVisible(Boolean(searchText))
        searchText && onChange && onChange(searchText)
    }

    const getHighlightedText = (text: string, searchText: string) => {
        /// search for substring in item name, add styling to the found part
        const escapedText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const parts = text.split(new RegExp(`(${escapedText})`, 'gi'));
        return <span> { parts.map((part, i) => 
            <span key={i} className={part.toLowerCase() === searchText.toLowerCase() ? 'highlight' : '' }>
                { part }
            </span>)
        } </span>
    }

    const onItemClick = (value: string) => {
        /// set input value to the clicked item text
        setIsSuggestionsVisible(false)
        setValue(value)
    } 
 
    return (
        <>
            <input style={inputStyle} value={value} onChange={onTextChange} placeholder={placeholder} />
            {portal && isSuggestionsVisible && createPortal(
                (
                    <div
                        className='autocomplete-popup'
                    >
                        {results && results.length !== 0 && (
                            results.map((hero) => {
                                return <div className='autocomplete-item' key={hero[keyProp]} onClick={() => onItemClick(hero[labelProp])}>
                                    {getHighlightedText(hero[labelProp], value)}
                                </div>
                            })
                        )}
                        {(!results || !results.length) && (
                            <div className='autocomplete-item'>No results</div>
                        )}
                    </div>
                ),
                portal
            )}
        </>
    )
}

export default AutoComplete