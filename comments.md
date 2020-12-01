### 完成度：


__Details:__

- \- 完成度低于2/3

### 测试：


__Details:__



### 知识点：


__Details:__

- \- groups， trainers， trainees这三个Array数据都应该被提升到App.js组件，因为三者数据之间有联动
- \- 跨域的处理应该放到后端
- \- 组件划分不合理，出现了map里面套map,说明这里应该再抽取一层组件
- \- 组件划分不合理，应该再抽出一层Trainer或者PersonnelItem组件
- \- 组件划分不合理，应该再抽出一层Trainee或者PersonnelItem组件
- \- 疑惑：这个if()存在的意义是什么？因为你最终总是会return response.json();？
- \- 建议使用onKeyUp而不是onKeyDown

### 工程实践：


__Details:__

- \- 没有被使用到的代码，不应该被提交到remote
- \- 组件命名不合理，建议改为Groups
- \- API请求建议抽取到单独的utils文件里面
- \- css class的命名（session）没有体现业务逻辑
- \-  不要进行无意义的缩写（group-stu）
- \- API请求建议抽取到单独的utils文件里面
- \- API请求建议抽取到单独的utils文件里面
- \- API请求建议抽取到单独的utils文件里面
- \- API请求建议抽取到单独的utils文件里面
- \- API请求建议抽取到单独的utils文件里面
- \- API请求建议抽取到单独的utils文件里面
- \- 不建议通过改变input的type这种方式来实现，这样会使代码变得复杂，从而不利于阅读和维护

### 综合：


__Details:__



