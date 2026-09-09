//  File :  generics.ts
//  User :  it
//  Date :  2026-09-09
//  Time :  오후 3:09
//  Desc :  


import {useState} from "react";

console.log('\n ----- 제네릭 -----\n');
//  제네릭 : 자바의 제네릭과 동일한 의미로 사용함
//  특정 객체를 생성 시 해당 객체에서 사용되는 데이터 타입을 설정
//  리액트의 상태 객체 State 에서 주로 사용됨

//  배열 선언 기본 형태
let tags: string[] = [];
//  제네릭을 사용한 배열 선언, 제네릭으로 number 타입의 배열 선언
let ids: Array<number> = [];


//  리액트의 현재 컴포넌트 상태 정보를 저장하는 useState에 초기값 설정을 통해서 자동 추론 방식으로 데이터 설정
const [keyword, setKeyword] = useState('');
const [page, setPage] = useState(0);
const [isOpen, setIsOpen] = useState(false);

//  잘못된 코드, useState 의 초기값이 null 로 설정되어 저장할 수 있는 데이터가 null 로 고정됨
const [post, setPost] = useState(null);

//  useState 에 실제로 저장될 데이터가 Post 타입이지만 초기값을 null 로 설정할 경우 제네릭을 사용하여 사용할 데이터 타입을 설정해야 함
//  제네릭에 Post 와 null 을 함께 사용하여 초기값을 null 로 설정하고, 차후에 저장될 데이터를 Post 타입으로 설정함
const [post, setPost] = useState<Post|null>(null);

//  useState 의 초기값이 빈 배열이면 제네릭 필수

//  초기값이 never[] 로 추론하게 됨,  차후에 Post[] 을 입력할 수 없음
const [posts, setPosts] = useState([]);

//  제네릭을 사용하여 저장할 데이터가 Post[] 임을 알려주고 있기 때문에 초기값 [] 이 Post[] 의 빈 배열임을 컴파일러가 알고 있음
const [posts, setPosts] = useState<Post[]>([]);
//  저장될 데이터가 string[] 임을 제네릭을 통해서 설정, 초기값은 빈 배열로 설정
const [tags, setTags] = useState<string[]>([]);


//  타입 지정없음, any 타입으로 데이터를 받음, 오류 검출이 안됨
const res = await axios.get('/api/posts');
console.log(res.data);

//  타입 지정, Post[] 타입으로 데이터를 받아옴, 자동 완성이 동작됨
const res = await axios.get<Post[]>('api/posts');
console.log(res.data[0].title);








