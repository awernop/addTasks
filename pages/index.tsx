import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Input, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { $card, addCard } from "@/store/task";
import { useEvent, useUnit } from "effector-react";
import Card from "@/components/card/card";
import '@fontsource/roboto/400.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const card = useUnit($card);

  const addCardEvent = useEvent(addCard);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addCardEvent(data);
  }
  return (
    <>
    <div className={styles.all__div}>
    <div className={styles.left__div}>
      <Typography className={styles.zad__txt}>Задача</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.shit__form}>
      <Typography className={styles.name__txt}>Название задачи</Typography>
    <TextField {...register('name', {required: true})} id="in1" variant="outlined"/>
    {errors.name && <span className={styles.red}>Вы не заполнили название задачи</span>}
    <Typography className={styles.name__txt}>Описание</Typography>
    <TextField {...register('description', {required: false})} id="in2" variant="outlined" className={styles.input2}/>
    <Button type="submit" variant="contained">Отправить</Button>
      </form>
      <div className={styles.me}>
          <Typography className={styles.auth}>Работу выполнила: Борисова Анна Андреевна</Typography>
      </div>
    </div>
    <div className={styles.card__list}>
    {card.map((el, index) => 
              {return <Card 
                  key={index} 
                  name = {el.name} 
                  description = {el.description} 
                  />
    })}
    </div>
    </div>
    </>
  );
}
