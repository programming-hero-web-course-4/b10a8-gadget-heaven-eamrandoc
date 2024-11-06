import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div role='tablist' className='tabs-boxed w-64  flex flex-col gap-6 p-6 bg-white border rounded-2xl'>
            {categories.map(category => (
                <NavLink
                    key={category.category}
                    to={`/category/${category.category}`}
                    role='tab'
                    className={({ isActive }) =>
                        `tab btn text-2xl rounded-3xl hover:bg-bgPrimary hover:text-white ${isActive ? 'bg-bgPrimary' : 'bg-gray-100'}`
                    }
                >
                    {category.category}
                </NavLink>
            ))}
        </div>
    )
};

export default Categories;
