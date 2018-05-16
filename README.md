DOCKER搭建基础LNMP环境
===============


## Docker_env

>   docker-lnmp环境;附带PHP常见算法实例

## 目录结构
    root    
    ├── docker-compose.yml
    ├── LICENSE
    ├── package
    │   ├── index.php
    │   ├── Other
    │   │   ├── BigSmallReplace.php
    │   │   ├── DynamicProgramming.php
    │   │   ├── Fibonacci.php
    │   │   ├── GetCattle.php
    │   │   ├── HanoiGames.php
    │   │   ├── MonkeyKing.php
    │   │   └── StealingApples.php
    │   ├── phpinfo.php
    │   ├── Query
    │   │   ├── BinaryQuery.php
    │   │   ├── BinaryTree.php
    │   │   ├── FibonacciQuery.php
    │   │   ├── InsertQuery.php
    │   │   └── QulickQuery.php
    │   └── Sort
    │       ├── BubbleSort.php
    │       ├── InsertSort.php
    │       ├── MergeSort.php
    │       ├── QuickSort.php
    │       ├── SelectSort.php
    │       └── ShellSort.php
    ├── README.md
    └── services
        ├── config
        │   ├── default.conf
        │   ├── opcache-recommended.ini
        │   └── php.ini
        ├── console
        │   ├── composer.phar
        │   ├── docker-compose
        │   └── Dockerfile
        ├── mysql
        │   ├── docker-compose.yml
        │   ├── my.cnf
        │   └── mysql-cluster.cnf
        └── php
            ├── config
            │   ├── default.conf
            │   ├── opcache-recommended.ini
            │   └── php.ini
            └── Dockerfile
    
    10 directories, 36 files


## 简易结构
        
    ├──Package
    │    ├── Sort  排序篇
    │    │    ├── BubbleSort.php          冒泡排序
    │    │    ├── QuickSort.php           快速排序
    │    │    ├── ShellSort.php           希尔排序
    │    │    ├── MergeSort.php           归并排序
    │    │    ├── InsertSort.php          插入排序
    │    │    └── SelectSort.php          选择排序
    │    │ 
    │    ├── Query 查找篇
    │    │    ├── BinaryQuery.php         二分查找
    │    │    ├── InseertQuery.php        插入查找
    │    │    ├── FibonacciQuery.php      斐波那契查找
    │    │    └── QulickQuery.php         快速查找 
    │    │     
    │    └── Other 其他 
    │         ├──  MonkeyKing.php         猴子选大王
    │         ├──  DynamicProgramming.php 动态规划
    │         ├──  Fibonacci.php          斐波那契数列
    │         ├──  StealingApples.php     偷苹果求余
    │         ├──  HanoiGames.php         汉诺塔游戏
    │         ├──  GetCattle.php          牛年求牛
    │         └──  BigSmallReplace.php    Hello World 输出 Olleh Dlrow
    │     
    ├──LICENSE 
    └──README.md
 
