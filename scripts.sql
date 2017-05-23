CREATE TABLE public.user (
    id bigserial primary key,
    name varchar(20) NOT NULL,
    email text NOT NULL,
    date_added timestamp default NULL
);;

insert into public."user" (name, email) VALUES ('syed', 'jasfsa@gmail.com');;