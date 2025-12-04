<template>
    <div class="common-layout" style="overflow: hidden">
        <el-container>
            <el-header height="4rem" class="header">
                <Header />
            </el-header>
            <el-container>
                <el-aside width="12rem">
                    <AsideMenu />
                </el-aside>

                <el-main>
                    <div class="card" style="margin-bottom: 5px">
                        <el-input
                            style="width: 260px; margin-right: 5px"
                            v-model="data.username"
                            placeholder="请输入账号查询"
                            :prefix-icon="Search"
                            clearable
                            @clear="load"
                        ></el-input>
                        <el-input
                            style="width: 260px; margin-right: 5px"
                            v-model="data.name"
                            placeholder="请输入名称查询"
                            :prefix-icon="Search"
                            clearable
                            @clear="load"
                        ></el-input>
                        <el-button type="primary" @click="load">查 询</el-button>
                        <el-button @click="reset">重 置</el-button>
                    </div>

                    <div class="card" style="margin-bottom: 5px">
                        <el-button type="danger">批量删除</el-button>
                        <el-button type="primary">新 增</el-button>
                        <el-button type="success">批量导入</el-button>
                        <el-button type="info">批量导出</el-button>
                    </div>

                    <div class="card" style="margin-bottom: 5px">
                        <el-table
                            stripe
                            border
                            :data="data.tableData"
                            style="width: 100%"
                            :header-cell-style="{ color: '#333', backgroundColor: '#ffb6c1' }"
                        >
                            <el-table-column type="selection" width="55" />
                            <el-table-column prop="username" label="账号" />
                            <el-table-column prop="password" label="密码" />
                            <el-table-column prop="name" label="名称" />
                            <el-table-column prop="email" label="邮箱" />
                            <el-table-column prop="phone" label="电话" />
                            <el-table-column prop="createTime" label="创建时间" />
                            <el-table-column prop="userType" label="用户类型" />
                            <el-table-column label="操作">
                                <template #default="scope">
                                    <el-button size="small"> 修改 </el-button>
                                    <el-button size="small" type="danger"> 删除 </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="card">
                        <el-pagination
                            v-model:current-page="data.pageNum"
                            v-model:page-size="data.pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :page-sizes="[5, 10, 20]"
                            :total="data.total"
                            @current-change="load"
                            @size-change="load"
                        />
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="userManager">
import Header from "@/views/index/header.vue";
import AsideMenu from "@/views/index/aside.vue";
import request from "@/utils/request.js";
import { reactive } from "vue";
import { ElMessage } from "element-plus";

const data = reactive({
    username: null,
    name: null,
    pageNum: 1,
    pageSize: 5,
    total: 6,
    tableData: [],
});

const load = () => {
    request
        .get("/user/selectPage", {
            params: {
                pageNum: data.pageNum,
                pageSize: data.pageSize,
                name: data.name,
            },
        })
        .then((res) => {
            if (res.code === "200") {
                data.tableData = res.data.list;
                data.total = res.data.total;
            } else {
                ElMessage.error(res.msg);
            }
        });
};
load();

const reset = () => {
    data.username = null;
    data.name = null;
    load();
};
</script>

<style scoped>
.card {
    padding: 10px;
    border-radius: 5px;
}
</style>
