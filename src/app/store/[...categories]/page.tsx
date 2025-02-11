interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string,
    }
}

export default function Category (props: CategoryProps) {
    const { categories } = props.params;
    return (
        <div>
            <h2>Category Page {categories}</h2>
            <p>This is the Category page.</p>
        </div>
    )
}