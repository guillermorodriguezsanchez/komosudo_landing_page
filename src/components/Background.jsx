

// eslint-disable-next-line react/prop-types
const Background = ( { children } ) =>
{
    return (

        <body className="bg-white dark:bg-black transition-all">
            {children}
        </body>
    )
}

export default Background;