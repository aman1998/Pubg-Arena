import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import {getLobbiesSuccess as getLobbiesSuccessAction} from '../../store/actions/lobbies'

const CreateLobbie = () => {
    const dispatch = useDispatch()

    const createLobby = (body) => {
        fetch(`http://localhost:1717/createLobby`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        })
        .then((data) => {
            dispatch(getLobbiesSuccessAction(true))
        })
    }
    return (
    <Formik
        initialValues={{
            title: '',
            name_mode: "",
            priceGame: '',
            priceKill: '',
            date: "",
            time: '',
            player_count: 0,
            player_list: [],

        }}
        onSubmit={fields => {
            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            createLobby(fields)
        }}
    >
        <Form>
            <div>
                <div>
                    <label htmlFor="title">Название лобби</label>
                    <Field name="title" type="text" />
                </div>
                <div>
                    <label>Карта</label>
                    <Field name="name_mode" as="select">
                        <option value=""></option>
                        <option value="Miramar">Miramar</option>
                        <option value="Erangel">Erangel</option>
                    </Field>
                </div>
                <div>
                    <label>Цена за участие</label>
                    <Field name="priceGame" as="select">
                        <option value=""></option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                    </Field>
                </div>
                <div>
                    <label>Цена за убийство</label>
                    <Field name="priceKill" as="select">
                        <option value=""></option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </Field>
                </div>
                <div>
                    <label htmlFor="date">Дата</label>
                    <Field name="date" type="date" />
                </div>
                <div>
                    <label htmlFor="time">Время</label>
                    <Field name="time" type="time" />
                </div>
            </div>
            <div>
                <button type="submit">Создать</button>
            </div>
        </Form>
    </Formik>
    )
}

export default CreateLobbie;