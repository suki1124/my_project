import React from 'react'


export function HeaderTop(){
    return (
        <div className="ikfixedwrapper"> 
        <div className="hdaily">
            <div className="icontainer">
                <div className="idaily">
                    <div className="idailyl">
                        <div id="idailycalendar" className="idailycalendar">
                            <ul id="idcroller" className="ikonroller">
                                <li>
                                <span  className="cldr ikon-calendar-1">
                                    ::before
                                </span>
                                " 10 сарын 30 Пүрэв
                                               "
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="idailyr">
                        <div id="idailyweather" className="idailyweather">
                            <ul id="idroller" className="ikonroller">
                                <li>
                                    <div id="idwname">
                                        <span>
                                            <a href="/wetter">0'C</a>
                                        </span>
                                        <a href="/wetter">Улаанбаатар</a>
                                        <div className="idwcond">
                                        <img height="26" loading="lazy" src="https://content.ikon.mn/ikon/images/weather/conds/s29.png" alt="S29"/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="idwname">
                                        <span>
                                            <a href="/wetter">0'C</a>
                                        </span>
                                        <a href="/wetter">Дархан</a>
                                        <div className="idwcond">
                                        <img height="26" loading="lazy" src="https://content.ikon.mn/ikon/images/weather/conds/s26.png" alt="S26"/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="idwname">
                                        <span>
                                            <a href="/wetter">1'C</a>
                                        </span>
                                            <a href="/wetter">Эрдэнэт</a>
                                        <div className="idwcond">
                                        <img height="26" loading="lazy" src="https://content.ikon.mn/ikon/images/weather/conds/s26.png" alt="S26"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="idsep">
                                        |
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* header heseg */}

        <div id="header">
            <div className="hdheight"></div>
            <div className="hbody">
                <div className="icontainer">
                    <div className="silhouette">
                        <div className="logo">
                            <a href="/" className="alogo" style={ {border: 0}  } turbolinks="false">
                                <img alt="logo" class="dpi1x" height="72" src="./static/images/ikon.png" style={ {border: 0}  }/> 
                                <img alt="logo" class="dpi2x" height="72" src="./static/images/ikon@2x.png" style={ {border: 0}  }/> 
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="hmenu">
                <div className="icontainer">
                    <div className="inavbar">
                        <ul className="imenu">
                            <li className="active" id="mm0">
                                <a href="/" data-turbolinks="false">ЭХЛЭЛ</a>
                            </li>
                            <li id="mm">
                                <a data-turbolinks="false" href="/elections/2020/itx">
                                    <span style={ {color: 'yellow'} }>ИТХ 2020</span>
                                </a>
                            </li>
                            <li id="mm1"> 
                                <a href="/1/1">УЛС ТӨР</a>
                            </li>
                            <li id="mm2">
                                <a href="/l/2">ЭДИЙН ЗАСАГ</a>
                            </li>
                            <li id="mm3">
                                 <a href="/l/3">НИЙГЭМ</a>
                            </li>
                            <li id="mm16">
                            <a href="/l/16">ЭРҮҮЛ МЭНД</a>
                            </li>
                            <li id="mm4">
                            <a href="/l/4">ДЭЛХИЙ</a>
                            </li>
                            <li id="mm73">
                            <a data-turbolinks="false" href="/live">LIVE</a>
                            </li>
                            <li id="mm_top_news">
                            <a href="/tops">ШИЛДЭГ</a>
                            </li>
                            <li id="dropdown">
                            <a href="/dropwon">Бусад</a> 
                            </li>        
                        </ul>
                        
                    </div>
                </div>

            </div>
            
        </div>
        
        <div className="Corecontainer">
            <div className="Wrapper">
                <div className="icontainer">
                    <div className="ss_type_tabs">
                        <div className="iconsh">
                            <div id="AC_IKONMN_B1" className="vads hide600">
                                <iframe title="iframe" width="280" height="200" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" 
                                allowtransparency="true" src="/ad/IKONMN_B1" style= {{position: "relative" , display: "block"}}>
                                    <div className="bx-wrapper">
                                        <div className="bx-viewport">
                                            <ul id="banner_IKONMN_B1">
                                                <li >

                                                </li>

                                            </ul>

                                        </div>

                                    </div>
                                </iframe>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </div>
    )
}