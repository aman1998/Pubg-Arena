import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'

const Privacy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <PageTemplate>
      <section className='privacy container'>
        <h1>Политика конфиденциальности</h1>
        <div>
        <p>Дата последнего обновления: «21» октября 2020 года</p>
        <p>Настоящая Политика конфиденциальности (далее — «Политика») определяет, как ARENA LTD (далее — «Arena», «мы») обрабатывает ваши (далее — «Пользователь», «вы») персональные данные, и какие права предоставлены вам в связи с такой обработкой.</p>
        <p>Версия документа: 1.08</p>
        </div>
        <div className='privacy-list'>
          <h2>1.Пределы действия Политики</h2>
          <div>
            1.1. Настоящая Политика распространяется на сбор и обработку персональных данных в связи с исполнением Arena (далее — «Условия использования»):
            <ul>
              <li>для предоставления ответов на ваши запросы в техническую поддержку, другие службы и в онлайн-чатах (далее — «Запросы»);</li>
              <li>для исполнения надлежащих правовых обязательств Arena;</li>
              <li>для осуществления обработки данных в случаях, когда вы дали на это свое согласие.</li>
            </ul>
          </div>
          <div>
          1.2. Предоставляя вам доступ к программному обеспечению, Arena, действуя разумно и добросовестно, считает, что вы (a) имеете все необходимые права для использования Платформы; (b) поддерживаете безопасность вашего пароля и идентификации; © предоставляете о себе достоверные данные; (d) понимаете, что публикуя ваши персональные данные там, где они доступны другим пользователям Платформы, вы явно сделали эти данные общедоступными, и осознаете, что такие данные могут стать доступными для третьих лиц, могут копироваться и распространяться такими третьими лицами; (e) ознакомились и принимаете настоящую Политику.
          </div>
          <div>1.3. Если вы не согласны с настоящей Политикой, пожалуйста, не пользуетесь Платформой.</div>
          <div>1.4. Настоящая Политика не распространяется на программное обеспечение и мобильные приложения, а также сервисы сторонних разработчиков, поставщиков, рекламодателей или спонсоров, социальные сети, услуги, которые могут быть доступны через Платформу или интегрированы с ней, равно как и ссылки на них (далее — «Сторонние сервисы»). Например, при оплате вы можете быть перенаправлены на сайт платежной системы. Обработка данных в этих случаях находится вне контроля Arena. Такие Сторонние сервисы являются самостоятельными контролерами данных и действуют на основании собственных политик, мы рекомендуем вам ознакомиться с ними. Мы не несем никакой ответственности за политику конфиденциальности таких Сторонних сервисов, и вы используете эти сервисы на свой страх и риск.</div>
          <div>1.5. Настоящая Политика неразрывно связана с Условиями использования, в связи с чем вам необходимо внимательно ознакомиться и принять этот документ. В случае каких-либо противоречий между настоящей Политикой и Условиями использования, настоящая Политика будет иметь преимущественную силу.</div>
          <div>1.6. Мы стремимся защищать и уважать вашу конфиденциальность. Если мы определяем цель для которой обрабатываются персональные данные, которые вы предоставляете посредством Платформы, мы являемся «контролером данных». </div>
        </div>
        <div className='privacy-list'>
          <h2>2.Собираемые и обрабатываемые данные</h2>
          <div>
            2.1. Arena может собирать и обрабатывать персональные данные, под которыми понимаются любые данные, которые могут идентифицировать вашу личность, а также иные данные (в том числе анонимизированные), прямо не относящиеся к персональным данным. Например, технические характеристики устройств, подключений, отчеты об ошибках, способы взаимодействия с интерфейсами (далее — «Дополнительные данные»).
          </div>
          <div>
            2.2. Arena собирает и обрабатывает следующие данные:
          </div>
          <div>
            2.2.1. Когда вы регистрируетесь или входите на Платформу, вам необходимо предоставить следующую информацию:
            <ul>
              <li>Уникальный идентификатор пользователя, который идентифицирует вас через ваш номер;</li>
            </ul>
          </div>
          <div>
          2.2.2. Для настройки двойной идентификации, вам необходимо предоставить следующую информацию:
          <ul>
            <li>Номер телефона.</li>
          </ul>
          </div>
          <div>1.6. Мы стремимся защищать и уважать вашу конфиденциальность. Если мы определяем цель для которой обрабатываются персональные данные, которые вы предоставляете посредством Платформы, мы являемся «контролером данных».</div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Privacy 