import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'

const Rules = () => {
  return (
    <PageTemplate>
      <section className='privacy container'>
        <h1>Правила игры</h1>
        <div>
        <p>Настоящим определяются правила проведения Турниров.</p>
        <p>Правила обязательны для исполнения всеми участниками и командами участников, принимающими участие в каком-либо Турнире на стриминговой киберспортивной платформе Arenum (далее — Платформа Arenum). Регистрация на Турнир означает ваше полное и безоговорочное согласие с настоящими правилами.</p>
        <p>Компания Apple не имеет никакого отношения к Турнирам, не участвует в них и не является спонсором каких-либо Турниров.</p>
        </div>
        <div className='privacy-list'>
          <h2>1. ФОРМАТ ПРОВЕДЕНИЯ</h2>
          <div>1.1. Существуют турниры в соло режиме и командные турниры.</div>
          <div>1.2. Турнир может быть проведен в один или несколько этапов, что зависит от того, какое максимальное количество участников допускается конкретной игрой для добавления их в одно игровое лобби такой игры. Каждый этап состоит из одного или нескольких матчей (конкретных игр).</div>
          <div>1.3. Победитель Турнира в один этап определяется по количеству набранных очков в игре в рамках одного или нескольких матчей. В матче выигрывает участник или участники (в зависимости от количества призовых мест в Турнире), набравший наибольшее количество очков в соответствии с условиями конкретного Турнира.</div>
          <div>1.4. Очки начисляются за место, занятое в игре, за количество поверженных противников и за дополнительные показатели, которые при наличии обязательно указываются в Карточке турнира.</div>
        </div>
        <div className='privacy-list'>
          <h2>2. ИНФОРМАЦИЯ О ТУРНИРЕ</h2>
          <div>2.1.Каждая Карточка турнира содержит информацию об организаторе Турнира, сроках проведения Турнира, виде Турнира, режиме турнира, стоимости участия в Турнире, участниках, зарегистрированных на Турнир, о максимальном количестве участников, которое может принять участие в Турнире, о размере призового фонда и его распределении на призы в зависимости от количества призовых мест в Турнире.
          </div>
        </div>
        <div className='privacy-list'>
          <h2>3. РЕГИСТРАЦИЯ НА ТУРНИР</h2>
          <div>3.1. Чтобы принять участие в Турнире, необходимо пройти регистрацию на Турнир на Платформе Arenum, для чего необходимо выбрать интересующий вас Турнир в разделе Турниров и нажать кнопку регистрации. В случае если участие в Турнире осуществляется за билеты, необходимо приобрести нужное количество билетов и оплатить ими участие в Турнире.
          </div>
          <div>3.2. Регистрацию на турнир с командным участием осуществляет капитан команды. При регистрации на такой турнир у каждого участника списываются билеты пропорционально количеству участников команды. Участник, который вступил в команду согласился с тем, что капитан регистристрируется на турнир от лица всей команды и что при такой регистрации у всех участников команды списываются билеты пропорционально количеству участников.
          </div>
          <div>3.3. Организаторы Турнира оставляют за собой право отказать в регистрации любому участнику без объяснения причин.</div>
        </div>
        <div className='privacy-list'>
          <h2>4. ПОДГОТОВКА К МАТЧУ</h2>
          <div>4.1. После регистрации, Турнир на который вы зарегистрировались, появится в вашем календаре в личном кабинете, а в случае участия в командном турнире, то после регистрации команды капитаном, турнир появится в календаре в личном кабинете у каждого участника команды.
          </div>
          <div>4.2. За 10 минут до старта матча в вашем личном кабинете или в Карточке турнира появится активная кнопка, позволяющая перейти в комнату матча. Пройдя проверку на читы и нажав кнопку, участник попадает в комнату матча, где ему необходимо ввести свой игровой никнейм, под которым он будет принимать участие в конкретном матче, после чего он автоматически получает необходимые данные для доступа во внутриигровое лобби. Эти данные участник должен ввести в поля ввода до момента начала матча, чтобы принять в нем участие.
          </div>
          <div>4.3. В случае участия в командном турнире, команда получит необходимые данные для доступа во внутриигровое лобби только после ввода никнейма каждого участника команды. В случае, если хотя бы один из участников команды не введет свой никнейм, команда не сможет участвовать в турнире.
          </div>
        </div>
        <div className='privacy-list'>
          <h2>5. АНТИ-ЧИТ</h2>
          <div>5.1. До того, как вы попадете в комнату матча, наша Анти-чит система проверит ваше устройство на наличие читерского ПО.</div>
          <div>5.2. В случае, если на вашем устройстве не установлено наше Анти-чит мобильное приложение, Платформа попросит вас его скачать, установить, зайти в нужный турнир и получить данные по матчу.</div>
          <div>5.3. В случае, если ваше устройство не содержит читерского ПО, вы будете допущены в комнату матча.</div>
          <div>5.4. В случае, если на вашем устройстве будет обнаружено читерское ПО, вы не сможете перейти в комнату матча, а возможность вывода любых выигранных вами призов будет заблокирована до окончания расследования по инциденту, даже если эти призы были выиграны вами до того, как вас уличили в использовании читерского ПО.</div>
          <div>5.4. Если в результате расследования выяснится, что вы использовали читерское ПО, ваш аккаунт будет заблокирован без права на восстановление или создания другого аккаунта с этого же устройства.</div>
        </div>
        <div className='privacy-list'>
          <h2>6. НАЧАЛО МАТЧА</h2>
          <div>6.1. Матч начинается в момент, когда истек срок на вход в игру и судья или комментатор Турнира (назначаются организатором Турнира) нажимают кнопку для начала игры.</div>
          <div>6.2. Участник, опоздавший к началу матча, не получает очки за матч, при этом никнейм участника будет отражен в итоговой таблице результатов Турнира с нулевым результатом. Если к началу матча опоздал участник команды командного турнира, команда не получает очки за матч, при этом название команды и никнеймы участников будут отражены в итоговой таблице результатов Турнира с нулевым результатом.</div>
        </div>
        <div className='privacy-list'>
          <h2>7. ИЗМЕНЕНИЯ В РАСПИСАНИИ ТУРНИРА</h2>
          <div>7.1. Организаторы Турнира оставляют за собой право вносить изменения в расписание матчей Турнира. Изменения в расписании незамедлительно отображаются в Карточке турнира, а также в календаре в личном кабинете каждого участника Турнира. Информация о переносе матча или Турнира и причине такого переноса будет направляться участникам при помощи уведомлений.</div>
        </div>
        <div className='privacy-list'>
          <h2>8. НАРУШЕНИЕ ПРАВИЛ ТУРНИРА</h2>
          <div>8.1. Нарушение правил Турнира может привести к дисквалификации игрока или всей команды, а именно к запрету на участие в Турнирах на 24 часа, 72 часа или навсегда, к запрету на вывод призов, или же к запрету на использование учетной записи без возможности регистрации нового аккаунта.</div>
          <div>8.2. К нарушениям относятся:
            <ul>
              <li>оскорбление других участников, зрителей, судей, комментаторов или организаторов Турнира;
создание помех для проведения Турнира;</li>
              <li>создание помех для проведения Турнира;</li>
              <li>участие в Турнире под чужой учетной записью;</li>
              <li>преднамеренно играть плохо, ниже уровня своего мастерства, чтобы соответствовать менее опытному участнику;</li>
              <li>участие в каких-либо Турнирах с помощью ботов, программ, читов, или аналогичных методов, использование эмулятора на десктопе, позволяющего играть в мобильную игру на десктопном устройстве, либо совершение иного рода мошеннических действий в отношении Платформы Arenum (все вместе - читерское ПО). Любая попытка сделать это приведет к прекращению вашего доступа к вашей учетной записи, а также к призам и билетам. Организатор Турнира оставляет за собой право прекратить доступ к любой учетной записи, владелец которой подозревается в подделке результатов своей игры для участия в Турнире или иным образом нарушил настоящие правила;
участие в тиминге - объединении нескольких игроков в соло режиме, чтобы командой в сговоре убивать одиночных игроков;</li>
              <li>распространять ID лобби и пароль, а также приглашать сторонних третьих лиц не зарегистрированных в Турнире посредством сервиса самой игры;
нарушать Условия использования платформы “Arenum”.</li>
            </ul>
          </div>
        </div>
        <div className='privacy-list'>
          <h2>9. СУДЕЙСТВО</h2>
          <div>9.1. В случае если организатором Турнира был назначен судья на матч, судья следит за тем, чтобы игра велась честно и без нарушений.</div>
          <div>9.2. Все участники, желающие сообщить о нарушениях, должны обратиться к организатору Турнира посредством формы обратной связи в личном кабинете в течение 24 часов после окончания матча. В случае если сообщение от участника поступит позднее указанного срока, такое сообщение не будет учитываться организатором Турнира.</div>
          <div>9.2. Решения по спорным вопросам выносит организатор Турнира в течение 48 часов после окончания матча.</div>
          <div>9.3. Решение по спорному вопросу, вынесенное организатором Турнира, является окончательным.</div>
          <div>9.4. Результатом решения по спорному вопросу может стать дисквалификация команды участников или участника, что означает обнуление результата команды участников в конкретном спорном матче, а также запрет на участие в Турнирах на срок 24 часа, 72 часа или навсегда, или же к запрету на использование учетной записи.</div>
          <div>9.5. О решении по спорному вопросу участники узнают из информации, размещенной в Карточке матча.</div>
          <div>9.6. Дисквалифицированная команда участников или участник теряют право на получение призов за Турнир, с которого она или он были дисквалифицированы.</div>
        </div>
        <div className='privacy-list'>
          <h2>10. РЕЗУЛЬТАТ</h2>
          <div>10.1. Список победителей размещается в Карточке матча и Карточке турнира после завершения матча или всего Турнира.</div>
          <div>10.2. Результаты и победители каждого Турнира определяются Платформой Arenum автоматически с учетом фактических данных игры.</div>
          <div>10.3. После определения победителя или команды победителей, ему автоматически начисляются очки, которые отображаются в карточке турнира в в разделе “Результаты”.</div>
          <div>10.4. Дата последнего обновления: «27» августа 2020 года</div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Rules