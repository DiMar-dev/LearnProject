
const Repository = {


    getChildUSers: () => {
        let childUsers = [
            {
                "ID": 1,
                "name": "NameTest1",
                "surname": "SurnameTest1",
                "parentID": 1
            },
            {
                "ID": 2,
                "name": "NameTest2",
                "surname": "SurnameTest2",
                "parentID": 2
            },
            {
                "ID": 3,
                "name": "NameTest3",
                "surname": "SurnameTest3",
                "parentID": 3
            },
            {
                "ID": 4,
                "name": "NameTest4",
                "surname": "SurnameTest4",
                "parentID": 4
            },
            {
                "ID": 5,
                "name": "NameTest5",
                "surname": "SurnameTest5",
                "parentID": 5
            },
            {
                "ID": 6,
                "name": "NameTest6",
                "surname": "SurnameTest6",
                "parentID": 6
            },
            {
                "ID": 7,
                "name": "NameTest7",
                "surname": "SurnameTest7",
                "parentID": 7
            }
        ]
        return childUsers;
    },
    getParentUSers: () => {
        let parentUsers = [
            {
                "ID": 1,
                "name": "ParentNameTest1",
                "surname": "ParentSurnameTest1",
                "mail": "parent1@mail.com",
                "masterPass" : "test1",
                "childPass" : "test"
            },
            {
                "ID": 2,
                "name": "ParentNameTest2",
                "surname": "ParentSurnameTest2",
                "mail": "parent2@mail.com",
                "masterPass" : "test2",
                "childPass" : "test"
            },
            {
                "ID": 3,
                "name": "ParentNameTest3",
                "surname": "ParentSurnameTest3",
                "mail": "parent3@mail.com",
                "masterPass" : "test3",
                "childPass" : "test"
            },
            {
                "ID": 4,
                "name": "ParentNameTest4",
                "surname": "ParentSurnameTest4",
                "mail": "parent4@mail.com",
                "masterPass" : "test4",
                "childPass" : "test"
            },
            {
                "ID": 5,
                "name": "ParentNameTest5",
                "surname": "ParentSurnameTest5",
                "mail": "parent5@mail.com",
                "masterPass" : "test5",
                "childPass" : "test"
            }
        ]
        return parentUsers;
    },
    getD_Tasks: () => {
        let D_Tasks = [
            {
                "ID": 0,
                "type": "Задача",
                "desc": "Избери една од твоите задачи",
            },
            {
                "ID": 1,
                "type": "Правопис",
                "desc": "Со допир на екранот или со глувчето испичи ја буквата А",
                "task": "А  A  A  A  A  A  A  A  A  A  А  A  A  A  A  A  A  A  A  A",
                "points" : 5
            },
            {
                "ID": 2,
                "type": "Правопис",
                "desc": "Состави реченциа од зборовите: скам, јас, јадам, јаболко, да, камен.",
                "solution": "Јас сакам да јадам јаболко",
                "points" : 10
            },
            {
                "ID": 3,
                "type": "Правопис",
                "desc": "Со допир на екранот или со глувчето испичи ја буквата А",
                "task": "Б б  Б б  Б б  Б б  Б б  Б б  Б б  Б б  Б б  Б б",
                "points" : 5
            },
            {
                "ID": 4,
                "type": "Математика",
                "desc": "3 + 4 = ",
                "solution": "7",
                "points" : 5
            },
            {
                "ID": 5,
                "type": "Сликање",
                "desc": "Со помош на дадените алатки нацртај ја  дадената слика",
                "imgTask": "../../staticResources/paint.jpg",
                "imgSolution": "слика",
                "points" : 20
            },
            {
                "ID": 6,
                "type": "Сликање",
                "desc": "Сликај по сопствена желба",
                "imgTask": "../../staticResources/paint.jpg",
                "points" : 5
            },
            {
                "ID": 7,
                "type": "Спорт",
                "desc": "Повторувај по мене",
                "solution": "https://www.youtube.com/embed/A0dkwlrC6ok",
                "points" : 5
            },
            {
                "ID": 8,
                "type": "Спорт",
                "desc": "Повторувај по мене",
                "solution": "https://www.youtube.com/embed/5if4cjO5nxo",
                "points" : 10
            },
            {
                "ID": 9,
                "type": "Спорт",
                "desc": "Повторувај по мене",
                "solution": "https://www.youtube.com/embed/A0dkwlrC6ok",//ovde pateka na sekoja slika ../images/imeodslika.img
                "points" : 15
            },
            {
                "ID": 10,
                "type": "Спорт",
                "desc": "Повторувај по мене",
                "solution": "https://www.youtube.com/embed/A0dkwlrC6ok",
                "points" : 15
            },
            {
                "ID": 11,
                "type": "Спорт",
                "desc": "Повторувај по мене",
                "solution": "https://www.youtube.com/embed/A0dkwlrC6ok",
                "points" : 15
            },
            {
                "ID": 12,
                "type": "Домашна задача",
                "desc": "Миење заби секое утро",
                "points" : 5
            },
        ]
        return D_Tasks;
    },

    getF_Tasks: () => {
        let F_Tasks = [
            {
                "taskID": 12,
                "childID": 1,
                "isDone": 0
            },
            {
                "taskID": 7,
                "childID": 1,
                "isDone": 0
            },
            {
                "taskID": 8,
                "childID": 1,
                "isDone": 1
            },
            {
                "taskID": 1,
                "childID": 2,
                "isDone": 0
            },
            {
                "taskID": 3,
                "childID": 2,
                "isDone": 0
            },
            {
                "taskID": 6,
                "childID": 2,
                "isDone": 0
            },
            {
                "taskID": 12,
                "childID": 3,
                "isDone": 0
            },
            {
                "taskID": 12,
                "childID": 3,
                "isDone": 1
            },
            {
                "taskID": 8,
                "childID": 3,
                "isDone": 1
            },
            {
                "taskID": 1,
                "childID": 3,
                "isDone": 1
            },
            {
                "taskID": 5,
                "childID": 4,
                "isDone": 0
            },
            {
                "taskID": 8,
                "childID": 4,
                "isDone": 1
            },
            {
                "taskID": 11,
                "childID": 4,
                "isDone": 1
            },
            {
                "taskID": 12,
                "childID": 5,
                "isDone": 0
            },
            {
                "taskID": 10,
                "childID": 5,
                "isDone": 0
            },
            {
                "taskID": 9,
                "childID": 5,
                "isDone": 0
            },
            {
                "taskID": 8,
                "childID": 5,
                "isDone": 0
            },
            {
                "taskID": 4,
                "childID": 2,
                "isDone": 1
            }

        ]
        return F_Tasks;
    },

    getForumPosts: () => {
        let posts = [
            {
                "ID" : 1,
                "Title" : "Title1",
                "Text" : "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            },
            {
                "ID" : 2,
                "Title" : "Title2",
                "Text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "ID" : 3,
                "Title" : "Title3",
                "Text" : "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            },
            {
                "ID" : 4,
                "Title" : "Title4",
                "Text" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            },
            {
                "ID" : 5,
                "Title" : "Title5",
                "Text" : "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            },
            {
                "ID" : 6,
                "Title" : "Title6",
                "Text" : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            },
            {
                "ID" : 7,
                "Title" : "Title7",
                "Text" : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            },
            {
                "ID" : 8,
                "Title" : "Title8",
                "Text" : "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            }
        ]
        return posts;
    }


}

export default Repository;
