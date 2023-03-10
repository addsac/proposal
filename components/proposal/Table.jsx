// example rows, finalRows
/* [
    {
        text1: '',
        text2: '',
        description: '',
    },
    ...
] */

import Paragraph from '@/components/proposal/Paragraph'

export default function Table({ rows = [], finalRows = [] }) {
    return (
        <div className="border border-black flex flex-col">
            { rows.map((row, index) => (
                <div 
                    key={row.title1 + '-' + index} 
                    className={`
                        flex flex-col p-6 gap-x-10 gap-y-3
                        ${finalRows.length == 0 && rows.length == index + 1 ? '' : 'border-b border-black'} 
                        hover:bg-gray-50 transition duration-100
                    `}
                >
                    <div className="flex items-start justify-between gap-y-4">
                        {/* <p className="text-lg">
                            { row.text1 }
                        </p> */}
                        <Paragraph 
                            text={ row.text1 }
                            size={2}
                        />
                        <Paragraph 
                            text={ row.text2 }
                            size={2}
                            shrink={false}
                        />  
                    </div>
                    { row.description != '' && (
                        <Paragraph 
                            text={ row.description }
                            size={3}
                        />
                    )}
                </div>
            ))}

            { finalRows.map((row, index) => (
                <div key={row.title1 + '-' + index} className='flex items-start justify-between p-6 gap-x-10 border border-black hover:bg-gray-50 transition duration-100'>
                    <div className="flex flex-col gap-y-4">
                        <p className="text-lg font-medium">
                            { row.text1 }
                        </p>
                        { row.description != '' && (
                            <p className="text-base leading-[170%]"> { row.description } </p>
                        )}
                    </div>
                    <p className='shrink-0 text-lg font-medium'>
                        { row.text2 }
                    </p>
                </div>
            ))}
        </div>
    )
}
