import './Skeleton.css';

export default function Skeleton() {
    return (
        <>
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="skeleton-card">
                    <span className='skeleton-img'></span>
                    <div className='skeleton-details-container'>
                        <span className='skeleton-detail'></span>
                        <span className='skeleton-detail'></span>
                    </div>
                    <div className='skeleton-title-container'>
                        <span className='skeleton-title'></span>
                        <span className='skeleton-title'></span>
                        <span className='skeleton-title'></span>
                    </div>
                    <span className='skeleton-btn'></span>
                </div>
            ))}
        </>
    )
}