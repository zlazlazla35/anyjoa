// 메인 > 슬라이드 임심 데이터
let data = [
    {
        image : 'main_slide1.jpg',
        title : '최애의 아이',
        content : '더현대 서울 09.26-10.09',
        category : ['환생', '아이돌', '연예계', '성장', '연애', '복수', '미스터리', '사회고발', '서스펜스', '스릴러', '드라마', '피카레스크'],
        years : 15,
        link : "https://www.youtube.com/embed/WVgJerFiBqI?si=FEgbX1K0e2Ahcufy"
    },
    {
        image : 'main_slide2.jpg',
        title : '신의탑',
        content : '새로운 동료들과 한층 더 높은 곳으로',
        category : ['퓨전', '판타지', '탑등반', '능력자', '배틀'],
        years : 12,
        link : "https://www.youtube.com/embed/Fm_75kwCrLY?si=I6lQKncbzfzf8p-3"
    },
    {
        image : 'main_slide3.jpg',
        title : '지팡이와 검의 위스토리아',
        content : '마법세계에서 검술로 승부한다',
        category : ['학교', '배틀', '판타지', '액션'],
        years : 15,
        link : "https://www.youtube.com/embed/KbYjD5FcCdg?si=o5LfiqGg8qVzP31z"
    },
    {
        image : 'main_slide4.jpg',
        title : '요자쿠라일가의 대작전',
        content : '반드시 너를 지키겠어',
        category : ['첩보', '러브 코미디', '배틀', 'SF', '일상', '가족'],
        years : 15,
        link : "https://www.youtube.com/embed/lc70U5LKDuw?si=lQ9kRvTgiK265K-q"
    },
    {
        image : 'main_slide5.jpg',
        title : '괴 ~ayakashi~',
        content : '검증된 스토리와 최고급 연출의 조화',
        category : ['판타지', '미스테리'],
        years : 19,
        link : "https://www.youtube.com/embed/KD4YQnsQM10?si=im9g42cwM7pSAcW7"
    },
    {
        image : 'main_slide6.jpg',
        title : '패배 히로인이 너무 많아!',
        content : '어서와, 차인 사람의 세계에',
        category : ['개그', '로맨스'],
        years : 15,
        link : "https://www.youtube.com/embed/uytJ6_KTCZI?si=23XT1il7h9CcgOzj"
    }
]





// 최근본 작품 임시 데이터
let contents = [
    {
        image : 'ani_poster1.jpg',
        title : '최애의 아이',
        content : '더현대 서울 09.26-10.09',
        category : ['환생', '아이돌', '연예계', '성장', '연애', '복수', '미스터리', '사회고발', '서스펜스', '스릴러', '드라마', '피카레스크'],
        years : 15,
        link : "https://www.youtube.com/embed/WVgJerFiBqI?si=FEgbX1K0e2Ahcufy"
    },
    {
        image : 'ani_poster2.jpg',
        title : '신의탑',
        content : '새로운 동료들과 한층 더 높은 곳으로',
        category : ['퓨전', '판타지', '탑등반', '능력자', '배틀'],
        years : 12,
        link : "https://www.youtube.com/embed/Fm_75kwCrLY?si=I6lQKncbzfzf8p-3"
    },
    {
        image : 'ani_poster3.jpg',
        title : '지팡이와 검의 위스토리아',
        content : '마법세계에서 검술로 승부한다',
        category : ['학교', '배틀', '판타지', '액션'],
        years : 15,
        link : "https://www.youtube.com/embed/KbYjD5FcCdg?si=o5LfiqGg8qVzP31z"
    },
    {
        image : 'ani_poster4.jpg',
        title : '요자쿠라일가의 대작전',
        content : '반드시 너를 지키겠어',
        category : ['첩보', '러브 코미디', '배틀', 'SF', '일상', '가족'],
        years : 15,
        link : "https://www.youtube.com/embed/lc70U5LKDuw?si=lQ9kRvTgiK265K-q"
    },
    {
        image : 'ani_poster5.jpg',
        title : '괴 ~ayakashi~',
        content : '검증된 스토리와 최고급 연출의 조화',
        category : ['판타지', '미스테리'],
        years : 19,
        link : "https://www.youtube.com/embed/KD4YQnsQM10?si=im9g42cwM7pSAcW7"
    },
    {
        image : 'ani_poster6.jpg',
        title : '패배 히로인이 너무 많아!',
        content : '어서와, 차인 사람의 세계에',
        category : ['개그', '로맨스'],
        years : 15,
        link : "https://www.youtube.com/embed/uytJ6_KTCZI?si=23XT1il7h9CcgOzj"
    }
]










// 전체 뿌려줄 애니 DB
let aniDb = [
    {
        id : 0,
        image : 'ani_poster1.jpg',
        title : '최애의 아이',
        series : '',
        category : ['환생', '아이돌', '연예계', '성장', '연애', '복수', '미스터리', '사회고발', '서스펜스', '스릴러', '드라마', '피카레스크'],
        years : 15,
        link : "https://www.youtube.com/embed/WVgJerFiBqI?si=FEgbX1K0e2Ahcufy",
        plot : `'이 연예계에서 거짓말은 무기다'
                지방 도시에서 일하는 산부인과 의사 고로.
                어느 날, '최애' 아이돌 'B코마치'의 멤버 아이가 그의 앞에 나타난다.
                그녀는 어떤 금단의 비밀을 품고 있었는데...
                그런 두 사람의 '최악'의 만남에서부터 운명이 움직이기 시작한다──.`
    },
    {
        id : 1,
        image : 'ani_poster2.jpg',
        title : '신의탑',
        series : '',
        content : '새로운 동료들과 한층 더 높은 곳으로',
        category : ['퓨전', '판타지', '탑등반', '능력자', '배틀'],
        years : 12,
        link : "https://www.youtube.com/embed/Fm_75kwCrLY?si=I6lQKncbzfzf8p-3",
        plot : `'탑에 오르면, 모든 것을 얻을 수 있다.
                탑의 정상엔 이 세상의 모든 것이 있고,
                이 세계를 손에 넣을 수 있다.
                신이 될 수도 있다.
                이것은, 별을 보고 싶어서 탑을 오르는 소녀 ‘라헬’과
                라헬만 있으면 아무것도 필요 없는 소년 ‘밤’의
                끝과 시작의 이야기다....`
    },
    {
        id : 2,
        image : 'ani_poster3.jpg',
        title : '지팡이와 검의 위스토리아',
        series : '',
        content : '마법세계에서 검술로 승부한다',
        category : ['학교', '배틀', '판타지', '액션'],
        years : 15,
        link : "https://www.youtube.com/embed/KbYjD5FcCdg?si=o5LfiqGg8qVzP31z",
        plot : `어엿한 마도사를 꿈꾸고 마법학교에 입학한 소년 윌. 누구보다도 노력하는 그에게는 마도사로서 치명적인 약점이 있었다.
                그것은 '마법을 전혀 사용할 수 없다'는 것. 동급생과 교사가 차가운 눈으로 바라보는 가운데 때로는 꺾일 것 같으면서도,
                윌은 마음을 강하게 먹고 정진했다. 지팡이는 쓸 수 없지만 검을 사용해 마법 지상주의인 세계에서 싸워 나간다. 자신에게만
                주어진 힘을 믿고. 그리고 소중한 사람과 한 약속을 지키기 위해.
                열등생인 소년이 검으로 마법에 도전한다. 지팡이와 검이 교차하는 마검담이 지금 시작된다!`
    },
    {
        id : 3,
        image : 'ani_poster4.jpg',
        title : '요자쿠라일가의 대작전',
        series : '',
        content : '반드시 너를 지키겠어',
        category : ['첩보', '러브 코미디', '배틀', 'SF', '일상', '가족'],
        years : 15,
        link : "https://www.youtube.com/embed/lc70U5LKDuw?si=lQ9kRvTgiK265K-q",
        plot : `이 가족, 평범하지 않다!?
                가족을 사고로 잃고 마음을 닫아버린 고등학생 아사노 타이요.
                친구들에게는 극도의 낯가림쟁이라는 인상을 가지고 있다.
                유일하게 대화할 수 있는 건 소꿉친구인 요자쿠라 무츠미, 단 한 명뿐.
                하지만 무츠미에게는 어떤 비밀이 숨겨져 있는데?!
                그녀의 정체는 대대로 이어져 내려온 스파이 일가의 당주로, 여러 적으로부터 목숨이 노려지고 있었다!
                심지어 그녀의 오빠 쿄이치로는 최강의 스파이로 이상할 정도로 무츠미를 맹목적으로 애지중지하고 있다.
                타이요는 그런 쿄이치로부터 배제 타겟으로서 목숨이 노려지고,,,
                무츠미와 자신의 목숨을 지키기 위해 타이요가 쓴 수단은
                무츠미와 결혼해서 요자쿠라 일가의 데릴사위로 들어가는 것?!
                타이요, 무츠미, 그리고 요자쿠라 일가를 둘러싼 눈을 뗄 수 없는 전대미문의 대작전이 시작된다!`
    },
    {
        id : 4,
        image : 'ani_poster5.jpg',
        title : '괴 ~ayakashi~',
        series : '',
        content : '검증된 스토리와 최고급 연출의 조화',
        category : ['판타지', '미스테리'],
        years : 19,
        link : "https://www.youtube.com/embed/KD4YQnsQM10?si=im9g42cwM7pSAcW7",
        plot : `에도 괴기문학의 걸작 츠루야 난보쿠의 <요츠야 괴담>, 메이지의 문호 이즈미 쿄카의 환상문학 <천수 이야기>, 괴기 일본영화의 단골 <바케네코>. 그 이상하고도 아름다운, 역겹고 슬픈 세 가지의 괴담을 옴니버스 애니메이션으로 전합니다.`
    },
    {
        id : 5,
        image : 'ani_poster6.jpg',
        title : '패배 히로인이 너무 많아!',
        series : '',
        content : '어서와, 차인 사람의 세계에',
        category : ['개그', '로맨스', '학교'],
        years : 15,
        link : "https://www.youtube.com/embed/uytJ6_KTCZI?si=23XT1il7h9CcgOzj",
        plot : `좋아하는 사람의 여자 친구 자리를 뺏기고 만 여자아이, '패배 히로인'
                먹는 걸 좋아하는 소꿉친구 히로인 야나미 안나
                활기찬 스포츠계 히로인 야키시오 레몬
                낯가림이 심한 작은 동물 같은 코마리 치카
                조금은 안타까운 패배 히로인
                새로운 감각의 엉망진창 패배계 청춘 스토리가 지금 막을 올린다!
                패배하고 빛나라, 패로인들이여!`
    },
    {
        id : 6,
        image : 'ani_poster7.jpg',
        title : '하이큐!!',
        series : '1기',
        content : '',
        category : ['학교', '스포츠'],
        years : 15,
        link : "https://www.youtube.com/embed/qHQAOr9FRq4?si=W0qkjcFJn9ww-uYM",
        plot : `배구에 매료되어 중학생 시절 최초이자 마지막 공식전에 출전한 히나타 쇼요. 하지만 '코트 위의 제왕'이라는 별명을 가진 천재 선수 카게야마에게 처참히 패하고 만다. 복수를 맹세한 히나타는 카라스노고 배구부의 문을 두드리는데?! 그곳에서 카게야마를 다시 만난다!
                히나타의 능력을 최대한 활용하기 위해 최고의 타이밍에서 토스를 올리는 카게야먀, 두 사람의 힘이 하나로 모아질 때 명콤비가 탄생한다!! 
                전국대회 예선에 대비해 맹훈련을 실시하는 카라스노 배구부! 하지만 예선의 같은 블록 안에는 아오바조사이, 그리고 인연 깊은 '철벽' 다테공고가 가로막고 있다...! 상대가 누구든 눈앞의 일전을 잡기 위해 나간다! 신생 카라스노 배구부, 마침내 출전!! 
                ‘눈앞의 공이 전부’, 카라스노 선수들의 마음이 이어지는 힘으로 바뀐다! 
                격전을 제압하고 승리를 거머쥐는 팀은 과연 어디일까?!`
    },
    {
        id : 7,
        image : 'ani_poster8.jpg',
        title : '하이큐!!',
        series : '2기',
        content : '',
        category : ['학교', '스포츠'],
        years : 15,
        link : "https://www.youtube.com/embed/s0nPyYcXcdc?si=NKPeQlwphz0Tv_fU",
        plot : `더이상 괴짜 속공을 할 때 눈을 감지 않겠다고 선언한 히나타. 하지만 카게야마는 그 말을 일축하고, 진화하기를 바라는 히나타와의 사이에 균열이 생기고 만다. 
                도쿄 원정에서 강호 팀과의 도쿄 합숙을 통해 한 사람 한 사람 더욱 진화한 카라스노.
                히나타와 카게야마의 새로운 속공도 틀이 잡혀가는 가운데, 마침내 봄철 대회 예선 당일을 맞이한다!
                그 동안 쌓이고 쌓인 울분을 힘으로 바꾸어, 드디어 첫 시합 개시! 카라스노는 와쿠타니미나미를 꺾고 대표결정전 준결승에 진출한다.
                카라스노는 가진 전력을 모두 쥐어짜 마지막 승부에 나선다!! 숙명의 아오바조사이전 마침내 결판!`
    },
    {
        id : 8,
        image : 'ani_poster9.jpg',
        title : '하이큐!!',
        series : '카라스노 고교 VS 시라토리자와학교 고교 3기',
        content : '',
        category : ['학교', '스포츠'],
        years : 15,
        link : "https://www.youtube.com/embed/MGMgOb62EVU?si=2dt3IIz0d4oa9Bvl",
        plot : `"카라스노 고교 vs 시라토리자와 학교 고교"
                아오바죠사이전에서의 승리로 이전 패배의 설움을 극복하고 결승전에 진출한 카라스노 고교! 전국대회에 진출하기 위해 시라토리자와와 5세트 결승전을 치른다! 시라토리자와에는 강력한 스파이커 우시지마가 있었는데... 왼손잡이인데다가 엄청난 위력을 가진 우시지마로 고전하는 카라스노. 과연 결승전의 승자는?`
    },
    {
        id : 9,
        image : 'ani_poster10.jpg',
        title : '하이큐!!',
        series : '끝과 시작 - 판권 부활',
        content : '',
        category : ['학교', '스포츠'],
        years : 12,
        link : "https://www.youtube.com/embed/8sJs0Ud0Y1o?si=GoepSF687bRsx2uf",
        plot : `“코트 최후의 승자는 바로 우리야!” ‘한 때’ 고교 배구의 명문이었던 카라스노 고교에 입학하게 된 의욕 충만한 스파이커 ‘히나타’. 우연히 중학 시절 시합에서 만났던 천재 세터 ‘카게야마’를 같은 학교 배구부에서 만나고, 라이벌 구도를 형성하지만 점차 호흡을 맞추게 된다. 카라스노 고교 배구부는 예전의 명성을 찾기 위해 점차 팀을 꾸리게 되고 영원한 라이벌 네코마 고교와의 본격적인 첫 공식 연습 경기를 가지게 되는데… 최강이 되기 위한 불꽃 같은 승부가 시작된다!`
    },
    {
        id : 10,
        image : 'ani_poster11.jpg',
        title : '하이큐!!',
        series : '재능과 센스',
        content : '',
        category : ['학교', '스포츠'],
        years : 12,
        link : "https://www.youtube.com/embed/0_CIBE8dzPQ?si=tCyEEYFB0r31cJ_v",
        plot : `“재능은 꽃피우는 것, 센스는 갈고 닦는 것!”
                '카라스노’ 고교 배구팀은 ‘인터하이’ 예선 탈락 후, 도쿄에서의 합숙 훈련 끝에 봄철 고교 배구 대회에 참가한다..
                결승 진출을 노릴만큼 눈에 띄게 성장한 ‘카라스노’는 드디어 준결승에서 강호 ‘아오바 죠사이’ 고교와의 결전을 치르게 된다. 다시 한 번 맞붙게 된 ‘카게야마’와 ‘오이카와’, ‘카라스노’와 ‘아오바 죠사이’ 고교 사이의 경기에 모든 이들의 이목이 집중되는데…
                모든 것을 내건 불꽃 같은 승부가 시작된다!`
    },
    {
        id : 11,
        image : 'ani_poster12.jpg',
        title : '하이큐!!',
        series : '승자와 패자 - 판권 부활',
        content : '',
        category : ['학교', '스포츠'],
        years : 12,
        link : "https://www.youtube.com/embed/iYnKizEBzOw?si=5Ceqru-iXHf0c4ir",
        plot : `“우리는 충분히, 모두 강해!”
                ‘카라스노’ 고교의 스파이커 ‘히나타’와 
                천재 세터 ‘카게야마’는 입부 후 첫 전국 대회인 
                인터하이 예선에 참가한다. 
                한 번이라도 패배하면 탈락해 버리는 상황에서 
                ‘카라스노’는 상대팀들을 쓰러뜨리며 점차 성장한다. 
                그러나 현내 강호 ‘아오바 죠사이’ 고교와 3회전에서 맞붙게 되고, 
                최강 세터 ‘오이카와’와 대결하며 ‘카라스노’는 벼랑 끝에 내몰리게 되는데… 
                흐름을 바꾸기 위한 마지막 승부수를 던져라!`
    },
    {
        id : 12,
        image : 'ani_poster13.jpg',
        title : '하이큐!!',
        series : 'TO THE TOP part 1',
        content : '',
        category : ['학교', '스포츠'],
        years : 15,
        link : "https://www.youtube.com/embed/pIIwEag83J8?si=tRriXgjMpqXedSj8",
        plot : `춘계 고교 밸리 미야기현 예선, 격전 끝에 갈망하던 전국대회 출전을 결정한 카라스노 배구부.
                전국대회를 앞둔 그들에게, 카게야마의 전일본 유스 강화 합숙 소집 소식이 날아들었다.
                또한 츠키시마도 미야기 현 1년생 선발 강화 합숙으로의 소집이 걸린다.
                같은 1학년의 차이에 초조한 히나타는, 미야기 현 1년생 선발 강화 합숙으로 몰려가는데....?
                전국대회 본경기를 향해서, 히나타, 카게야마, 그리고 카라스노고교 배구부의 또 다른 도전이 시작된다!`
    },
    {
        id : 13,
        image : 'ani_poster14.jpg',
        title : '하이큐!!',
        series : 'TO THE TOP part 2',
        content : '',
        category : ['학교', '스포츠'],
        years : 15,
        link : "https://www.youtube.com/embed/pIIwEag83J8?si=tRriXgjMpqXedSj8",
        plot : `춘계 고교 밸리 미야기현 예선, 격전 끝에 갈망하던 전국대회 출전을 결정한 카라스노 배구부.
                전국대회를 앞둔 그들에게, 카게야마의 전일본 유스 강화 합숙 소집 소식이 날아들었다.
                또한 츠키시마도 미야기 현 1년생 선발 강화 합숙으로의 소집이 걸린다.
                같은 1학년의 차이에 초조한 히나타는, 미야기 현 1년생 선발 강화 합숙으로 몰려가는데....?
                전국대회 본경기를 향해서, 히나타, 카게야마, 그리고 카라스노고교 배구부의 또 다른 도전이 시작된다⸺!!`
    },
    {
        id : 14,
        image : 'ani_poster15.jpg',
        title : '윈브레 -WINBRE',
        series : '',
        content : '',
        category : ['우정', '액션', '학교'],
        years : 15,
        link : "https://www.youtube.com/embed/IuSAC8ZDf1A?si=-vM5JdZ1eXjKH03h",
        plot : `'성적은 최저, 싸움은 최강.'
                불량 학교로 이름 높은, 후우린 고교.
                그 정상을 차지하기 위해, 마을 밖에서 온 고교 1학년 사쿠라 하루카.
                하지만, 현재의 후우린 고교는 ‘보후우린’이란 이름으로 마을을 지키는 집단이 돼 있는데!?
                불량 고교생 사쿠라의 영웅 전설, 지금 개막!`
    },
    {
        id : 15,
        image : 'ani_poster16.jpg',
        title : '주술회전',
        series : '1기 part 1',
        content : '',
        category : ['퇴마', '액션', '학교', '배틀', '어반 판타지', '능력자 배틀'],
        years : 15,
        link : "https://www.youtube.com/embed/1tk1pqwrOys?si=CCMeKWQ8HZX6214e",
        plot : `소년은 싸운다 --- '올바른 죽음'을 위해 
                쓰라린 고통, 후회, 치욕
                인간으로부터 흘러나온 부정적인 감정이 저주로 변해 일상에 숨어든다,
                저주는 세상에 만연한 재앙의 근원이며, 최악의 경우 인간을 죽음으로 이끈다.
                그리고 저주는 저주로밖에 없앨 수 없다. 
                경이적인 신체능력을 가진 소년 이타도리 유지는 아주 평범한 고등학생이었지만,
                어느 날 '저주'에 습격당한 친구를 구하기 위해 특급 주물 '양면 스쿠나의 손가락'을 먹고 영혼에 저주가 깃들게 된다.
                저주인 '양면 스쿠나'와 몸을 공유하게 된 이타도리는 최강의 주술사인 고죠 사토루의 안내로 저주에 대항하는 전문 기관인 '도쿄 도립 주술 고등전문학교'에 편입하게 되는데......
                저주를 없애기 위해 저주가 된 소년의 돌이킬 수 없는 장렬한 이야기가 움직이기 시작한다--`
    },
    {
        id : 16,
        image : 'ani_poster17.jpg',
        title : '주술회전',
        series : '1기 part 2',
        content : '',
        category : ['퇴마', '액션', '학교', '배틀', '어반 판타지', '능력자 배틀'],
        years : 15,
        link : "https://www.youtube.com/embed/1tk1pqwrOys?si=CCMeKWQ8HZX6214e",
        plot : `소년은 싸운다 --- '올바른 죽음'을 위해 
                쓰라린 고통, 후회, 치욕
                인간으로부터 흘러나온 부정적인 감정이 저주로 변해 일상에 숨어든다,
                저주는 세상에 만연한 재앙의 근원이며, 최악의 경우 인간을 죽음으로 이끈다.
                그리고 저주는 저주로밖에 없앨 수 없다. 
                경이적인 신체능력을 가진 소년 이타도리 유지는 아주 평범한 고등학생이었지만,
                어느 날 '저주'에 습격당한 친구를 구하기 위해 특급 주물 '양면 스쿠나의 손가락'을 먹고 영혼에 저주가 깃들게 된다.
                저주인 '양면 스쿠나'와 몸을 공유하게 된 이타도리는 최강의 주술사인 고죠 사토루의 안내로 저주에 대항하는 전문 기관인 '도쿄 도립 주술 고등전문학교'에 편입하게 되는데......
                저주를 없애기 위해 저주가 된 소년의 돌이킬 수 없는 장렬한 이야기가 움직이기 시작한다--`
    },
    {
        id : 17,
        image : 'ani_poster18.jpg',
        title : '주술회전',
        series : '극장판 주술회전0',
        content : '',
        category : ['퇴마', '액션', '학교', '배틀', '어반 판타지', '능력자 배틀'],
        years : 15,
        link : "https://www.youtube.com/embed/h3YKB_XWcb4?si=OSigR1XA0OBSbY1L" ,
        plot : `어릴 적 소꿉친구인 오리모토 리카를 교통사고로 눈앞에서 잃은 옷코츠 유타. “약속해, 리카와 유타는 어른이 되면 결혼하기로” 옷코츠는 원령으로 변한 리카의 저주에 괴로워한 나머지, 자신도 죽기를 바라지만 최강의 주술사인 고죠 사토루에 의해 주술고전에 들어가게 된다. 그리고 동급생인 젠인 마키, 이누마키 토게, 판다를 만나면서 굳은 결심을 한다. “살아도 된다는 자신감이 필요해” “나는 주술고전에서 리카의 저주를 풀겠습니다” 한편, 옷코츠와 친구들 앞에 과거에 일반인을 대량으로 학살해서 고전에서 추방된 최악의 주저사인 게토 스구루가 나타난다. “12월 24일, 우리는 백귀야행을 결행한다” 주술사만의 낙원을 만들려는 게토는 비술사를 섬멸하겠다면서, 신주쿠와 교토에 천의 저주를 내리는데…과연 옷코츠는 게토를 막을 수 있을까? 그리고 리카의 저주를 풀 수 있을까?`
    },
    {
        id : 18,
        image : 'ani_poster19.jpg',
        title : '주술회전',
        series : '2기 : 회옥·옥절',
        content : '',
        category : ['퇴마', '액션', '학교', '배틀', '어반 판타지', '능력자 배틀'],
        years : 15,
        link : "https://www.youtube.com/embed/gcgKUcJKxIs?si=bko3Uz9TTTpffed-",
        plot : `최강의 두 사람이, 이제는 돌아갈 수 없는 푸르른 봄날.
                2018년 6월, 양면 스쿠나를 자기 몸속에 깃들게 한 이타도리 유지.
                2017년 12월, 오리모토 리카의 저주를 푼 옷코츠 유타.
                그리고 더 거슬러 올라가서 때는 2006년 봄. 고전 시절의 고죠 사토루와 게토 스구루.
                주술사로서 활약하며 어디에도 적수가 없는 두 사람에게, 불사의 술식을 가진 주술계의 주축 텐겐으로부터 의뢰가 도착한다.
                의뢰 내용은 두 가지. 텐겐과의 적합자인 성장체(星漿体) 아마나이 리코의 호위와 말소.
                두 사람은 주술계의 존속을 위해서 호위 임무를 수행하게 되지만, 거기에 후시구로라는 주술사 킬러가 성장체의 암살을 노리고 개입한다...
                후에 최강의 주술사와 최악의 주저사로 불리는 고죠와 게토, 각각 다른 길을 걷게 된 두 사람의 과거가 밝혀진다.`
    },
    {
        id : 19,
        image : 'ani_poster20.jpg',
        title : '주술회전',
        series : '2기 : 시부야 사변',
        content : '',
        category : ['퇴마', '액션', '학교', '배틀', '어반 판타지', '능력자 배틀'],
        years : 15,
        link : "https://www.youtube.com/embed/fR0tqhqM7Yg?si=RB7RfCJUAk6jTau8",
        plot : `최후에 웃는 건 사람인가, 저주인가
                ‘고죠 사토루는 마땅한 때, 마땅한 장소
                이쪽의 어드밴티지를 확립한 다음에 봉인에 나선다
                결행은 10월 31일, 시부야’
                2018년 10월, 특급 주령의 교류회 습격 이후,
                주술고전 내의 긴장감이 높아지는 가운데 드디어 내통자의 정체가 밝혀진다.
                과연 내통자는 누구인가? 그 목적은?
                그리고 2018년 10월 31일.
                핼러윈으로 인해 북적거리는 시부야역 주변에 갑자기 ‘장막’이 쳐지고, 수많은 일반인이 갇힌다. ‘일반인만 가두는 장막’이란 고도의 결계술과, 일반인을 통해 전해진 ‘고죠 사토루를 데려와라’라는 지명에, 상층부는 피해를 최소화하기 위해 고죠 혼자서 시부야를 평정하라고 한다.
                게토와 마히토 등 주저사와 주령들이 함정을 파놓고 기다리는 가운데, 고죠는 그곳에 홀로 진입한다. 장막의 밖에선 이타도리, 후시구로, 쿠기사키, 나나미, 그리고 수많은 주술사가 집결해 있었다.
                시부야에 집결한 주술사 VS 주저사 · 주령!
                역사상 가장 대규모의 저주가 드디어 시작된다!`
    },
    {
        id : 20,
        image : 'ani_poster21.jpg',
        title : '체인소맨',
        series : '',
        content : '',
        category : ['다크 판타지', '액션', '코미디 호러', '현대 이능', '다크 히어로'],
        years : 19,
        link : "https://www.youtube.com/embed/vd3qLnMchXc?si=YA6n4JoDipNe9wm7",
        plot : `‘체인소의 악마’포치타와 함께 데블 헌터로 사는 소년 덴지.
                부모가 남긴 빚을 갚기 위해, 가난한 생활을 하던 중, 배신을 당해 죽임을 당하고 만다. 희미해지는 의식 속에서, 덴지는‘포치타’와 계약을 맺고,
                악마의 심장을 가진 자 ‘체인소 맨’으로 되살아 난다-!`
    },
    {
        id : 21,
        image : 'ani_poster22.jpg',
        title : '도쿄 리벤저스',
        series : 'part 1',
        content : '',
        category : ['서스펜스', '학교액션'],
        years : 19,
        link : "https://www.youtube.com/embed/3_hj6MyWOgA?si=nBsi9ZJcXdLiWOt7",
        plot : `밑바닥 인생을 살던 타케미치. 중학교 시절 사귀었던 인생에서 유일한 연인이었던 히나타가 가장 흉포하고 악질적인 악당 연합 "도쿄 만지회"에게 살해당했다는 것을 알게 된다.
                사건을 알게 된 다음 날, 역 플랫폼에 있던 타케미치는 누군가에게 떠밀려 선로로 떨어지고 다가오는 열차를 보며 자신의 죽음을 직감한다. 하지만 정신을 차리고 보니 어째서인지 12년 전으로 타임 리프해 있었다.
                인생의 전성기였던 12년 전 중학교 시절로 타임 리프해서 연인을 구하기 위해, 계속 도망치기만 했던 자신을 바꾸기 위해 인생의 리벤지를 시작한다!`
    },
    {
        id : 22,
        image : 'ani_poster23.jpg',
        title : '도쿄 리벤저스',
        series : 'part 2',
        content : '',
        category : ['서스펜스', '학교액션'],
        years : 19,
        link : "https://www.youtube.com/embed/keFRueltLIU?si=3veZ921_GQINq9VK",
        plot : `밑바닥 인생을 살던 타케미치. 중학교 시절 사귀었던 인생에서 유일한 연인이었던 히나타가 가장 흉포하고 악질적인 악당 연합 "도쿄 만지회"에게 살해당했다는 것을 알게 된다.
                사건을 알게 된 다음 날, 역 플랫폼에 있던 타케미치는 누군가에게 떠밀려 선로로 떨어지고 다가오는 열차를 보며 자신의 죽음을 직감한다. 하지만 정신을 차리고 보니 어째서인지 12년 전으로 타임 리프해 있었다.
                인생의 전성기였던 12년 전 중학교 시절로 타임 리프해서 연인을 구하기 위해, 계속 도망치기만 했던 자신을 바꾸기 위해 인생의 리벤지를 시작한다!`
    },
    {
        id : 23,
        image : 'ani_poster24.jpg',
        title : '귀멸의 칼날',
        series : '',
        content : '',
        category : ['시대극', '액션', '다크 판타지'],
        years : 19,
        link : "https://www.youtube.com/embed/fXyXIxHr55E?si=9TZ7o_ORiJzY8swH",
        plot : `숯을 파는 마음씨 착한 소년 탄지로는, 어느 날 혈귀에게 가족을 몰살당한다. 
                유일하게 살아남은 누이동생 네즈코 마저도 혈귀로 변하고 마는데...
                절망적인 현실에 큰 타격을 입은 탄지로였지만, 
                동생을 인간으로 돌려놓기 위해, 가족을 죽인 혈귀를 심판하기 위해, ‘귀살대’의 길을 가기로 결의한다.
                인간과 혈귀가 엮어낸 애절한 오누이의 이야기가 지금 시작된다-!`
    },
    {
        id : 24,
        image : 'ani_poster25.jpg',
        title : '귀멸의 칼날',
        series : ': 무한열차편',
        content : '',
        category : ['시대극', '액션', '다크 판타지'],
        years : 19,
        link : "https://www.youtube.com/embed/f6k4zhIzhiE?si=IsweBe8YdNGitjXi",
        plot : `혈귀로 변해버린 여동생 네즈코를 인간으로 되돌릴 단서를 찾아 비밀조직 귀살대에 들어간 탄지로. 젠이츠, 이노스케와 새로운 임무 수행을 위해 무한열차에 탑승 후 귀살대 최강 검사 염주 렌고쿠와 합류한다. 달리는 무한열차에서 승객들이 하나 둘 흔적 없이 사라지자 숨어있는 식인 혈귀의 존재를 직감하는 렌고쿠. 귀살대 탄지로 일행과 최강 검사 염주 렌고쿠는 어둠 속을 달리는 무한열차에서 모두의 목숨을 구하기 위해 예측불가능한 능력을 가진 혈귀와 목숨을 건 혈전을 시작하는데…`
    },
    {
        id : 25,
        image : 'ani_poster26.jpg',
        title : '귀멸의 칼날',
        series : ': 환락의 거리편',
        content : '',
        category : ['시대극', '액션', '다크 판타지'],
        years : 19,
        link : "https://www.youtube.com/embed/YtApIN3xw6Y?si=kEwCz5MB2aTSr_vQ",
        plot : `무한열차의 임무를 마친 탄지로 일행의 다음 행선지는?
                귀살대 최고의 검사 ‘주‘의 한 사람 ‘음주' 우즈이 텐겐과 탄지로 일행의 새로운 싸움의 막이 열린다!`
    },
    {
        id : 26,
        image : 'ani_poster27.jpg',
        title : '귀멸의 칼날',
        series : ': 도공 마을편',
        content : '',
        category : ['시대극', '액션', '다크 판타지'],
        years : 19,
        link : "https://www.youtube.com/embed/9HPF0-zZR-I?si=HUX6iPHON4RYOTj7",
        plot : `113년 만에 상현 혈귀가 죽자 분개한 무잔은 나머지 상현 혈귀들에게 또 다른 명령을 내린다!  한편, 규타로와의 전투 도중 검이 심하게 손상된 탄지로에게 하가네즈카는 대 격노하고 탄지로는 그 검을 만든 대장장이 하가네즈카 호타루에게 검이 어떻게 심하게 손상되었는지 설명하기 위해 도공 마을을 방문한다. 탄지로가 검이 수리되기를 기다리는 동안, 상현 혈귀 한텐구와 쿗코가 숨겨진 마을인 ‘도공 마을'을 습격한다. 공격할 때마다 분열해서 위력이 커지는 한텐구로 인해 탄지로와 겐야는 고전을 면치 못한다. 한편, 타인에 대한 관심이 희박한 하주 토키토 무이치로는 혈귀들에게 공격당하고 있는 코테츠를 목격하는데….`
    },
    {
        id : 27,
        image : 'ani_poster28.jpg',
        title : '귀멸의 칼날',
        series : ': 합동 강화 훈련편',
        content : '',
        category : ['시대극', '액션', '다크 판타지'],
        years : 19,
        link : "https://www.youtube.com/embed/ZRFsC0U9DH8?si=01K67qCb_utxEHQx",
        plot : `합동 강화 훈련으로――
                귀살대 최강의 검사 《주》와 귀살대원들.
                다가오는 키부츠지 무잔과의 결전에 대비하여 《합동 강화 훈련》 개막.
                저마다의 생각을 가슴에 품고, 탄지로와 주들의 새로운 이야기가 막을 올린다.`
    },
    {
        id : 28,
        image : 'ani_poster29.jpg',
        title : '옆자리 괴물군',
        series : '',
        content : '',
        category : ['우정', '성장', '로맨스', '학교', '개그'],
        years : 15,
        link : "https://www.youtube.com/embed/RFmbnsXqPno?si=GRBxNeXN_Y5odVDf",
        plot : `냉혈 여고생x수퍼 문제아의 신감각 러브스토리♡
                옆자리 요시다 하루는 입학 첫날 유혈사태를 일으킨 이후, 한 번도 학교에 나오지 않고 있다. 
                심약한 선생님의 부탁으로 문제아 하루에게 프린트를 전해주게 된 시즈쿠.
                자신의 성적 외에는 관심이 없던 은근 개인주의자인 시즈쿠는 이로인해 그 요시다 하루에게 친구로 인정을 받는다. 
                게다가 하루의 순수함을 알고 친절하게 대해주자 이번엔 고백까지 해오는데…?!
                한시도 눈을 뗄 수 없는 순진 악동 하루와 연봉 1억을 위해 사력을 다해 공부하는 시즈쿠의 경쾌한 러브 코미디!`
    },
    {
        id : 29,
        image : 'ani_poster30.jpg',
        title : '전생했더니 슬라임이었던 건에 대하여',
        series : '1기',
        content : '',
        category : ['이세계 전생', '판타지', '영지', '마왕', '이세계'],
        years : 15,
        link : "https://www.youtube.com/embed/BoZIyyL-4F8?si=G_VYtv2x0wEmLP3l",
        plot : `샐러리맨인 미카미 사토루는 길에서 칼에 찔려 죽었다. 하지만 문득 정신이 들어 깨어나보니 이세계로 전생해있었다, 그것도 슬라임의 모습으로! 리무루라는 이름으로 새롭게 슬라임 인생을 얻어, 여러 종족이 함께 사는 세계에 떨어지게 된 그는 '종족은 상관없이 모두가 행복하게 살 수 있는 나라'를 만드는 것을 새로운 인생 목표로 삼게 된다!`
    },
    {
        id : 30,
        image : 'ani_poster31.jpg',
        title : '전생했더니 슬라임이었던 건에 대하여',
        series : '2기 1부',
        content : '',
        category : ['이세계 전생', '판타지', '영지', '마왕', '이세계'],
        years : 15,
        link : "https://www.youtube.com/embed/EoBHRvbKrCQ?si=QKqRZYLz07kpqsPR",
        plot : `주인공 리무루와 그를 따르는 다수의 마물들이 세운 나라 '쥬라 템페스트 연방국'은 근린 국가들과의 협정과 교역을 통해 '인간과 마물이 공존하는 나라'라는 이상을 현실로 만들려 하고 있었다.이는 인간이었던 슬라임에서 기인한 리무루의 '인간에 대한 호의'였다......하지만 이 세계에는 명확한 '마물에 대한 적의'가 존재하고 있었다. 그 불합리한 현실을 마주했을 때, 리무루는 선택한다.
                '무엇을 잃고 싶지 않은지'를───`
    },
    {
        id : 31,
        image : 'ani_poster32.jpg',
        title : '전생했더니 슬라임이었던 건에 대하여',
        series : '2기 2부',
        content : '',
        category : ['이세계 전생', '판타지', '영지', '마왕', '이세계'],
        years : 15,
        link : "https://www.youtube.com/embed/EoBHRvbKrCQ?si=QKqRZYLz07kpqsPR",
        plot : `주인공 리무루와 그를 따르는 다수의 마물들이 세운 나라 
                '쥬라 템페스트 연방국'은 근린 국가들과의 협정과 교역을 통해 
                '인간과 마물이 공존하는 나라'라는 이상을 현실로 만들려 하고 있었다.
                이는 인간이었던 슬라임에서 기인한 리무루의 '인간에 대한 호의' 였다.
                하지만 이 세계에는 명확한 '마물에 대한 적의'가 존재하고 있었다.
                그 불합리한 현실을 마주했을 때, 리무루는 선택한다.
                '무엇을 잃고 싶지 않은지'를......`
    },
    {
        id : 32,
        image : 'ani_poster33.jpg',
        title : '전생했더니 슬라임이었던 건에 대하여',
        series : '3기',
        content : '',
        category : ['이세계 전생', '판타지', '영지', '마왕', '이세계'],
        years : 15,
        link : "https://www.youtube.com/embed/yuvrSLlouSA?si=UeUQr1vVTtI3bzq4",
        plot : `클레이만을 쓰러뜨리고 정식으로 마왕이 된 리무루. 
                발푸르기스를 거치면서 
                리무루의 지배 지역은 쥬라 대삼림 전체로 확장됐다.그 영샹으로 각 종족의 대표가 인사를 하러 쇄도할 것이 예상 되는 바 
                이 참에 마왕 리무루의 피로연을 열어 
                템페스트의 신규 주민 획득을 겸해 '개국제'를 개최하기로 한다.한편, 마물을 적대시하는 루미너스교의 총본산 신성교황국 루벨리오스에서는 
                성기사단장 히나타에게 리무루가 보낸 메시지가 도착했다. 하지만 그것은 누군가에 의해 조작된 선전 포고였다.
                템페스트로 히나타가 오고 있다는 보고를 들은 리무루의 결단은--.진정한 적과 아군을 파악하고 '인마공영권'이라는 이상을 추구하는 리무루의 새로운 도전이 시작된다.`
    },
    {
        id : 33,
        image : 'ani_poster34.jpg',
        title : '월간순정 노자키 군',
        series : '',
        content : '',
        category : ['개그', '로맨스', '학교', '개그'],
        years : 15,
        link : "https://www.youtube.com/embed/PlE_CYRq8IE?si=kerVvJ17-Oh938-o",
        plot : `노자키를 좋아해왔던 사쿠라는 용기를 내서 자신의 마음을 고백한다.
                그러나 사쿠라의 말의 의미를 잘못 받아들인 노자키는 자신의 필명이 적힌 사인을 선물하고 어시스턴트로서 그녀를 집으로 데려오는데...`
    }
]











export {data, contents, aniDb};