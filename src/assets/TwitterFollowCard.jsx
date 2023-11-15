import { useState } from "react"



export function TwitterFollowCard ({ children, userName, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo': 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    return(
        <article className='tw-followCard '>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="Avatar" 
                    src="https://scontent.ftru7-1.fna.fbcdn.net/v/t1.18169-9/11215714_879284142121543_6894057132537271503_n.jpg?stp=dst-jpg_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=c21ed2&_nc_eui2=AeHANZp2ZD8W7AjpZs4Cj60kKHfoIkaoAbUod-giRqgBtYTOXxjaZNzfEJAOZd42Q0wlGZD3Fn1uB0SGkaiiamU7&_nc_ohc=P-FeQZO0L7EAX9KckdI&_nc_ht=scontent.ftru7-1.fna&cb_e2o_trans=q&oh=00_AfBre3fNO4GO-T2AAKZCHQqEn6VEFs61hcwSDd2ryqxMyA&oe=657B4B2C"/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span
                        className='tw-followCard-infoUserName '
                    >@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={ () => setIsFollowing(!isFollowing)}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}